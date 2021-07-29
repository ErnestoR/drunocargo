import { UserCircleIcon } from "@heroicons/react/outline";

const NavBar = () => (
  <header class="lg:container lg:mx-auto flex mx-10 h-16 w-full items-center justify-between">
    <div className=" font-semibold text-base ">Dronocargo</div>
    <div className="flex items-center gap-2 ">
      <span className="text-base font-normal">Regina Zepeda</span>
      <UserCircleIcon className="w-5 h-5 text-gray-400" />
    </div>
  </header>
);

export default NavBar;
