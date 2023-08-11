import { Header, createStyles } from "@mantine/core";
import { ColorSchemeToggle } from "../common/ColorSchemeToggle";
import Dropdown from "./Dropdown";

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
      <div className="max-w-7xl mx-auto">
        <Header
          height={HEADER_HEIGHT}
          className={`${classes.root} !border-b-0`}
        >
          <div className="container mx-auto flex justify-between lg:flex-row border-b">
            <a className="flex title-font font-medium items-center mb-4 md:mb-0">
              <span className="ml-3 text-xl">Funkey-News</span>
            </a>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center list-none">
              <div className="pr-9 sm:pr-4">
                <Dropdown />
              </div>
              <div className="flex justify-end text-sm">
                <div className="flex justify-start items-center mb-6  mr-4">
                  <ColorSchemeToggle />
                </div>
              </div>
            </nav>
          </div>
        </Header>
      </div>
    </>
  );
}
