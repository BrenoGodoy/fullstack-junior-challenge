export default function NavItem({ children }: any) {
  return (
    <div className="relative">
      <span className="cursor-pointer hover:text-custom-primary">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-1 bg-custom-primary opacity-0 transition-opacity duration-300"></span>
    </div>
  );
};