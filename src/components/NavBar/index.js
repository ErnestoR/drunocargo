import { UserCircleIcon } from "@heroicons/react/outline";

const NavBar = () => (
  <header className="lg:container lg:mx-auto flex mx-10 h-16  items-center justify-between">
    <div className=" font-semibold text-sm sm:text-base">Dronocargo</div>
    <div className="flex items-center gap-2 ">
      <span className="hidden sm:inline text-base font-normal">
        Regina Zepeda
      </span>
      <UserCircleIcon className="w-5 h-5 text-gray-400" />
    </div>
  </header>
);

export default NavBar;
