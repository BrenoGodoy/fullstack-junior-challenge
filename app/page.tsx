import Details from "./components/details/details";
import Header from "./components/header/header";
import HomeImage from "./components/image/homeImage";
import Item from "./components/item/item";
import Title from "./components/title/title";

export default function Home() {
  return (
    <section className="min-h-screen lg:mx-12 xl:mx-28 custom-2xl:mx-48">
      <Header></Header>
      <div className="flex flex-wrap">
        <Title></Title>
        <HomeImage></HomeImage>
        <div className="flex flex-col flex-grow justify-around">
          <Item title="Fresh Spinach" price="12.00" imageUrl="https://s3-alpha-sig.figma.com/img/b049/f29a/1dc6073ed8422b28ba5c657cc5c0081c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fNho8FiGDO7Fc1aHuHhbWlob4bmTdUTKXGncXur-CHxcCiP-Lacs~0xU5eeipoE7tD5jg8UgUXoNwawyUFT6JD0Z7q92TcSLptP126f7I7rMGL8~4vRcbrDxaFUNnmCDIraXX1dwLy5xDDQ~jGsl20TonfI-xplWBFDiRx6FXguV7rPIi65AsZT~HqqiWiq4CzvVcSwRg-9gvTcrXYveFPXiUarNs80f5b1j3zmjls3Zzb1ms8DDajsPfx-MV4wC-eem3kd9ph5OHpdKe9-iyy36r783fp1drmGWt9Af9z8xY50ziHUilelCCZxI4IWTTXycC0qUCjhokJJJbqcT0Q__"></Item>
          <Item title="Fresh Carrot" price="9.00" imageUrl="https://s3-alpha-sig.figma.com/img/7e82/a86f/b89f012b47052be62bfcad1d9f6ad87b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G63p2A0e7sYSM6RVsoBFD2Rq~rYI4NVxtv8pUdu6X7kX1duOuPE3bMri4TwlXvZ5czq2zoAcoe9lS~ktP4vNhST~8CTC8tifyzaL28EOS1BlYkm23Yw2CKXnmmQNWF3Cf21gBUnkBcTNPBGTak7VlX9vNkofKDPsuZttJmDb1G1aQVhpL9SmUG0wQD~oiffXdEp2yHY~tIE4Xrrk2rj2V1sKYGhU~Nks3p0irvO2iCdyjs6AplHoejiK~A3PuK3Lxk88RP8-lhetA7GdvLTdsIekFpJP1qvrAmCdtvMVXnnQ4qIkKk5mbgGgBcXOc2vSKBPKM58vMW~~yD7rjgHjOg__"></Item>
        </div>
      </div>
      <div className="flex flex-wrap justify-around h-full mt-32">
        <Details description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Dairy Porducts" imageUrl="/grocery.png"></Details>
        <Details description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Vegetables" imageUrl="/vegetable.png"></Details>
        <Details description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Spices & Seasonings" imageUrl="/spices.png"></Details>
        <Details description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Honey" imageUrl="/honey.png"></Details>
        <Details description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." title="Flour" imageUrl="/flours.png"></Details>
      </div>
    </section>
  );
}
