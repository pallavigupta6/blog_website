import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="h-full flex-col px-3 py-4 md:px-2 bg-gray-50">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:px-1 gap-2">
        <NavLinks />
      </div>
    </div>
  );
}
