import { Menu, Transition } from "@headlessui/react";
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
  return (
    <header className="flex justify-between items-center py-4">
      <div className="flex items-center font-semibold">
        <a
          className="flex items-center transition ease-in-out duration-200  hover:-translate-y-1 hover:drop-shadow-md"
          href="/"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 3.125C2 2.2962 2.32924 1.50134 2.91529 0.915291C3.50134 0.32924 4.2962 0 5.125 0H17.625C18.4538 0 19.2487 0.32924 19.8347 0.915291C20.4208 1.50134 20.75 2.2962 20.75 3.125V6.25H23.875C24.7038 6.25 25.4987 6.57924 26.0847 7.16529C26.6708 7.75134 27 8.5462 27 9.375V21.875C27 22.7038 26.6708 23.4987 26.0847 24.0847C25.4987 24.6708 24.7038 25 23.875 25H11.375C10.5462 25 9.75134 24.6708 9.16529 24.0847C8.57924 23.4987 8.25 22.7038 8.25 21.875V18.75H5.125C4.2962 18.75 3.50134 18.4208 2.91529 17.8347C2.32924 17.2487 2 16.4538 2 15.625V3.125ZM5.125 1.5625C4.7106 1.5625 4.31317 1.72712 4.02015 2.02015C3.72712 2.31317 3.5625 2.7106 3.5625 3.125V15.625C3.5625 16.0394 3.72712 16.4368 4.02015 16.7299C4.31317 17.0229 4.7106 17.1875 5.125 17.1875H17.625C18.0394 17.1875 18.4368 17.0229 18.7299 16.7299C19.0229 16.4368 19.1875 16.0394 19.1875 15.625V3.125C19.1875 2.7106 19.0229 2.31317 18.7299 2.02015C18.4368 1.72712 18.0394 1.5625 17.625 1.5625H5.125Z"
              fill="#292524"
            />
          </svg>

          <span className="text-lg">NewHome</span>
        </a>
      </div>
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
    <ul className="inline-flex items-center ">
      <li className="mr-8 hover:underline">
        <a href="/">About Us</a>
      </li>
      <li className="mr-8 hover:underline">
        <a href="/">Careers</a>
      </li>
      <li>
        <button className="mr-4 px-4 py-2 border-slate-200 border-solid border-x border-y rounded-md transition ease-in-out duration-200  hover:-translate-y-1 hover:drop-shadow-md">
          Sign In
        </button>
      </li>

      <li>
        <button className="px-4 py-2 border-slate-900 border-solid border-x border-y rounded-md bg-slate-900 text-slate-50 transition ease-in-out duration-200 hover:-translate-y-1 hover:drop-shadow-md">
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
