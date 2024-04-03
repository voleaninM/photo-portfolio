import { PhotoT } from "@/types/PhotoT";
import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";
import { blurHashToDataURL } from "./blurHashToBase64";
function formatDate(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
export async function getData(query?: string): Promise<PhotoT[]> {
  const unsplash = createApi({
    accessKey: process.env.ACCESS_KEY!,
    fetch: nodeFetch.default as unknown as typeof fetch,
  });
  try {
    const images = await unsplash.photos.getRandom({
      query,
      count: 5,
    });

    if (images.type !== "success") {
      throw new Error(images.errors[0]);
    } else if (!images.response) {
      throw new Error("No data on this address");
    }
    const responseArr = Array.isArray(images.response)
      ? images.response
      : [images.response];

    return responseArr.map((image, index) => ({
      src: image.urls.full,
      thumb: image.urls.thumb,
      width: image.width,
      height: image.height,
      alt: image.alt_description || "picture",
      blurImage: blurHashToDataURL(image.blur_hash!),
      likes: image.likes,
      userInfo: {
        name: image.user.name,
        userImage: image.user.profile_image.small,
        date: formatDate(image.created_at),
      },
      imageInfo: {
        city: image.location.city,
        country: image.location.country,
      },
    }));
  } catch (error) {
    let message: string;
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Unknown error";
    }
    if (
      message === "expected JSON response from server." ||
      message.startsWith("An error occurred in the Server Components render")
    ) {
      message = "Exceeded limit of requests. Try again later.";
    }
    throw new Error(message);
  }
}
