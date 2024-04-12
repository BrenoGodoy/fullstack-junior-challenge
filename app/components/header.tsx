import Image from "next/image";
import NavItem from "./navItem";

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between items-center px-20 py-9">
      <div>
        <h1 className="text-4xl font-bold font-poppins">
          <span className="text-custom-primary">Finest</span>
          <span className="text-custom-secondary">Mart</span>
        </h1>
      </div>
      <nav className="flex space-x-6">
        <NavItem>Home</NavItem>
        <NavItem>Categories</NavItem>
        <NavItem>Sales</NavItem>
        <NavItem>FAQ</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </nav>
      <div className="flex items-center space-x-5">
        <Image src="/market.png" alt="market" width={32} height={32}></Image>
        <a href="#" className="text-custom-primary focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4">Sign In</a>
        <a href="#" className="text-white bg-custom-primary rounded-lg text-sm px-7 py-3">Sign Up</a>
      </div>
    </header>
  );
}
