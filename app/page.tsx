import Header from "./components/header/header";
import HomeImage from "./components/image/homeImage";
import SearchBar from "./components/searchBar/searchBar";
import Title from "./components/title/title";

export default function Home() {
  return (
    <section className="min-h-screen lg:mx-12 xl:mx-28 custom-2xl:mx-48">
      <Header></Header>
      <div className="flex flex-wrap">
        <Title></Title>
        <HomeImage></HomeImage>
      </div>
    </section>
  );
}
