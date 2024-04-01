import MainContent from "@/components/MainContent/MainContent";
import { getData } from "@/utils/getData";
type propsT = {
  params: {
    term: string;
  };
};

export async function generateMetadata({ params: { term } }: propsT) {
  return {
    title: `Results for ${term}`,
  };
}

export default async function SearchResults({ params: { term } }: propsT) {
  const data = await getData(term);
  const sortedData = data.sort((a, b) => b.likes - a.likes);
  return <MainContent images={sortedData} />;
}
