

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div className="max-w-4xl mx-auto py-3">
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl">Funkey-News</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center list-none ">
              <li className="nav-item px-2">
                  Business
              </li>
              <li className="nav-item">
                  Entertainment
              </li>
              <li className="nav-item">
                  General
              </li>
              <li className="nav-item">
                  Health
              </li>
              <li className="nav-item">
                  Science
              </li>
              <li className="nav-item">
                  Sports
              </li>
              <li className="nav-item">
                  Technology
              </li>
            </nav>
          </div>
        </header>

        <p className="mt-5">
          <a
            className="text-blue-600 hover:underline"
            href="#"
            target="_blank"
          ></a>
        </p>
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </>
  );
};

export default Navbar;
