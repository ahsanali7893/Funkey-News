import {  Header, createStyles, } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

import { ColorSchemeToggle } from "../common/ColorSchemeToggle";




const HEADER_HEIGHT = 0;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    backgroundColor: "#22272B",
  },

  header: {
    position: "sticky",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    borderBottom: "0px",
  },
}));

export default function Navbar() {
  const { classes } = useStyles();

 
  
  return (
    <>
      <div className="max-w-6xl mx-auto mb-10">
        <Header height={HEADER_HEIGHT} className={`${classes.root} !border-b-0`} >
          <div className="container mx-auto flex flex-wrap p-5 flex-col lg:flex-row items-center">
            <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
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
          <div className="flex justify-end items-center text-sm">
            <div className="flex justify-start items-center mb-6  mr-4">
              <ColorSchemeToggle />
            </div>
          </div>
            </nav>
          </div>
        </Header>

    
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </>
  );
};





