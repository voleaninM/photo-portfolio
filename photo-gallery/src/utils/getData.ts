import { PhotoT } from "@/types/PhotoT";
import { getPlaiceholder } from "plaiceholder";
import { Random } from "unsplash-js/dist/methods/photos/types";
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
  try {
    const resp = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&count=3&client_id=${process.env.ACCESS_KEY}`,
      { next: { revalidate: 10 } }
    );
    const images: Random | Random[] | { errors: string[] } = await resp.json();

    if ("errors" in images) {
      throw new Error(images.errors[0]);
    }
    const responseArr = Array.isArray(images) ? images : [images];

    const imagePromises = responseArr.map((image) =>
      getBase64(image.urls.full)
    );

    const blurImages = await Promise.all(imagePromises);
    return responseArr.map((image, index) => ({
      src: image.urls.full,
      thumb: image.urls.thumb,
      width: image.width,
      height: image.height,
      alt: image.alt_description || "picture",
      blurImage: blurImages[index],
      likes: image.likes,
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
    if (message === "expected JSON response from server.") {
      message = "Exceeded limit of requests. Try again later.";
    }
    throw new Error(message);
  }
}
