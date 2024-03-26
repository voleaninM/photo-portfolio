import MainContent from "@/components/MainContent/MainContent";
import { getData } from "@/utils/getData";
export default async function Home() {
  const [forests, oceans] = await Promise.all([
    await getData("forests"),
    await getData("oceans"),
  ]);

  const sortedForests = forests.sort((a, b) => b.likes - a.likes);
  const sortedOceans = oceans.sort((a, b) => b.likes - a.likes);
  return (
    <MainContent
      images={{
        all: [...sortedForests, ...sortedOceans],
        forests: [...sortedForests],
        oceans: [...sortedOceans],
      }}
    />
  );
}
