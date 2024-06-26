import SearchBar from "../searchBar/searchBar";

export default function Title() {
  return (
    <section className="w-97 mt-20">
      <h2 className="text-7xl font-extrabold text-[#403C39]">Let your 
      <span className="text-custom-primary-500"> groceries</span>
      </h2>
      <h2 className="text-7xl font-extrabold text-[#403C39] mt-3">come to you</h2>
      <p className="text-2xl  text-[#949494] mt-5">Get fresh groceries online without stepping out to 
      <br></br>make delicious food with the freshest ingredients</p>
      <SearchBar></SearchBar>
    </section>
  );
}
