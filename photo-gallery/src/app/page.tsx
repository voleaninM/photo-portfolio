import MainContent from "@/components/MainContent/MainContent";
import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";
import { PhotoT } from "@/types/PhotoT";
import lqipModern from "lqip-modern";

async function makeBlurImg(src: string): Promise<string> {
  const image = await fetch(src);
  const imageBuffer = Buffer.from(await image.arrayBuffer());
  return (await lqipModern(imageBuffer)).metadata.dataURIBase64;
}

export default async function Home() {
  const unsplash = createApi({
    accessKey: process.env.ACCESS_KEY!,
    fetch: nodeFetch.default as unknown as typeof fetch,
  });

  async function getData(query: string): Promise<PhotoT[]> {
    const images = await unsplash.search.getPhotos({
      query,
      perPage: 10,
    });

    if (images.type !== "success") {
      throw new Error("Failed to fetch data");
    }
    const imagePromises = images.response.results.map((image) =>
      makeBlurImg(image.urls.full)
    );

    const blurImages = await Promise.all(imagePromises);
    return images.response.results.map((image, index) => ({
      src: image.urls.full,
      thumb: image.urls.full,
      width: image.width,
      height: image.height,
      alt: image.alt_description || "picture",
      blurImage: blurImages[index],
    }));
  }
  const images = await getData("oceans");

  return <MainContent images={images} />;
}
