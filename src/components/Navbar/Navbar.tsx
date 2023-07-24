import { ActionIcon, ColorScheme, useMantineColorScheme, } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import {BsMoonStars, BsSun} from 'react-icons/bs'


type Props = {};

const Navbar = (props: Props) => {

 
  
  return (
    <>
      <div className="max-w-4xl mx-auto ">
        <header className="text-gray-600 body-font border-y shadow-sm shadow-orange-400 ">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl">Funkey-News</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center list-none ">
              <li className="nav-item px-2">
                  Business
              </li>
              <li className="nav-item px-2">
                  Entertainment
              </li>
              <li className="nav-item px-2">
                  General
              </li>
              <li className="nav-item px-2">
                  Health
              </li>
              <li className="nav-item px-2">
                  Science
              </li>
              <li className="nav-item px-2">
                  Sports
              </li>
              <li className="nav-item px-2">
                  Technology
              </li>
            </nav>
          </div>
        </header>

    
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </>
  );
};

export default Navbar;
