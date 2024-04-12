import Image from "next/image";
import NavItem from "./navItem";

export default function Header() {
  return (
    <header className="flex flex-wrap justify-around items-center py-9">
      <div>
        <h1 className="text-4xl font-bold font-poppins">
          <span className="text-custom-primary-500">Finest</span>
          <span className="text-custom-secondary-500">Mart</span>
        </h1>
      </div>
      <nav className="flex space-x-10">
        <NavItem>Home</NavItem>
        <NavItem>Categories</NavItem>
        <NavItem>Sales</NavItem>
        <NavItem>FAQ</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </nav>
      <div className="flex items-center space-x-5">
        <Image src="/market.png" alt="market" width={32} height={32} className="cursor-pointer"></Image>
        <a href="#" className="text-custom-primary-500 hover:text-custom-primary-200 font-medium rounded-lg text-sm px-4">Sign In</a>
        <a href="#" className="text-white bg-custom-primary-500 hover:bg-custom-primary-200 rounded-lg text-sm px-7 py-3">Sign Up</a>
      </div>
    </header>
  );
}
