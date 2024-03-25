import { PhotoT } from "@/types/PhotoT";
import { getPlaiceholder } from "plaiceholder";
import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";
async function getBase64(src: string): Promise<string> {
  try {
    const res = await fetch(src);
    if (!res.ok) {
      throw new Error(`Failed to fetch image ${res.status} ${res.statusText}`);
    }
    const imageBuffer = Buffer.from(await res.arrayBuffer());
    const { base64 } = await getPlaiceholder(imageBuffer);

    return base64;
  } catch (error) {
    return String(error);
  }
}
export async function getData(query: string): Promise<PhotoT[]> {
  const unsplash = createApi({
    accessKey: process.env.ACCESS_KEY!,
    fetch: nodeFetch.default as unknown as typeof fetch,
  });
  try {
    const images = await unsplash.photos.getRandom({
      query,
      count: 10,
    });

    if (images.type !== "success") {
      throw new Error(images.errors[0]);
    } else if (!images.response) {
      throw new Error("No data on this address");
    }
    const responseArr = Array.isArray(images.response)
      ? images.response
      : [images.response];

    const imagePromises = responseArr.map((image) =>
      getBase64(image.urls.full)
    );

    const blurImages = await Promise.all(imagePromises);
    return responseArr.map((image, index) => ({
      src: image.urls.full,
      thumb: image.urls.full,
      width: image.width,
      height: image.height,
      alt: image.alt_description || "picture",
      blurImage: blurImages[index],
      likes: image.likes,
    }));
  } catch (error) {
    throw new Error(String(error));
  }
}
