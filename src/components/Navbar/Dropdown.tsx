import { useState } from "react";

export default function Dropdown(props: any) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300"
          id="dropdown-trigger"
          onClick={toggleDropdown}
        >
          News
        </button>
        <ul
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } absolute z-10 mt-2 w-32 bg-white rounded-lg shadow-lg`}
          id="dropdown-menu"
        >
          <li
            className="py-1 px-3 hover:bg-gray-100 cursor-pointer"
            onClick={closeDropdown}
          >
            Item 1
          </li>
          <li
            className="py-1 px-3 hover:bg-gray-100 cursor-pointer"
            onClick={closeDropdown}
          >
            Item 2
          </li>
          <li
            className="py-1 px-3 hover:bg-gray-100 cursor-pointer"
            onClick={closeDropdown}
          >
            Item 3
          </li>
        </ul>
      </div>
    </div>
  );
}
