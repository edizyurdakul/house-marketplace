import { Menu, Transition } from "@headlessui/react";
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
  return (
    <header className="flex justify-between items-center py-4">
      <div>Logo</div>
      <nav className="hidden md:block">
        <DesktopNav />
      </nav>
      <nav className="block md:hidden">
        <MobileNav />
      </nav>
    </header>
  );
}

// To-do Proptypes
const DesktopNav = () => {
  return (
    <ul className="inline-flex items-center">
      <li className="mr-8 hover:underline">
        <a href="/">About Us</a>
      </li>
      <li className="mr-8 hover:underline">
        <a href="/">Careers</a>
      </li>
      <li>
        <button className="mr-4 px-4 py-2 border-slate-200 border-solid border-x border-y rounded-md hover:bg-slate-500 hover:text-slate-100">
          Sign In
        </button>
      </li>
      <li>
        <button className="px-4 py-2 border-slate-200 border-solid border-x border-y rounded-md bg-slate-300 hover:bg-slate-500 hover:text-slate-100">
          Sign Up
        </button>
      </li>
    </ul>
  );
};

// To-do Proptypes
const MobileNav = () => {
  return (
    <div>
      <Menu as="div" className="relative">
        <Menu.Button className="p-2 bg-slate-200 rounded-md">
          <HiOutlineMenu className="h-6 w-6" />
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute right-0 origin-top-right flex flex-col bg-slate-200  w-48 mt-1 p-1 rounded-md text-sm">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-slate-300 rounded-md"} p-2`}
                  href="/"
                >
                  About Us
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-slate-300 rounded-md"} p-2`}
                  href="/"
                >
                  Careers
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Navbar;
