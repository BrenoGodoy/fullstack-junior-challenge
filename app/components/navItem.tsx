export default function NavItem({ children }: any) {
  return (
    <div className="relative">
      <span className="cursor-pointer hover:text-custom-primary-500">{children}</span>
    </div>
  );
};