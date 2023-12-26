import Banner from "@src/features/home/Banner";
import FeaturedProducts from "@src/features/home/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <h1>
        <Banner />
        <FeaturedProducts title="Featured Products" />
      </h1>
    </main>
  );
}
