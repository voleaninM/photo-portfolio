import MainContent from "@/components/MainContent/MainContent";

import { getData } from "@/utils/getData";
export const dynamic = "force-dynamic";
export default async function Home() {
  const data = await getData();

  const sortedData = data.sort((a, b) => b.likes - a.likes);
  return <MainContent images={sortedData} />;
}
