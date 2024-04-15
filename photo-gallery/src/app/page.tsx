import MainContent from "@/components/MainContent/MainContent";

import { getData } from "@/utils/getData";

type Props = {
  searchParams?: {
    search?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const data = await getData(searchParams?.search);

  const sortedData = data.sort((a, b) => b.likes - a.likes);
  return <MainContent images={sortedData} />;
}
