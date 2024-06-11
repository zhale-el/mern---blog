import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap  sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Dashboard
        </span>
        <span className="ml-1">Blog</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search...."
          rightIcon={AiOutlineSearch}
        />
      </form>
    </Navbar>
  );
};

export default Header;
