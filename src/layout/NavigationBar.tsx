import React from "react";
import { useState } from "react";
import Logo from "../components/ui/Logo";
import Button from "../components/ui/Button";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const NavigationBar = () => {
  const [navBar, setNavBar] = useState(false);
  return (
    <>
      <header className="bg-natural-light-orchid flex items-center justify-between px-6 py-4">
        <Logo />
        <nav>
          <ul
            className={`w-full h-2/5  absolute inset-y-6 left-15  top-[84px] z-[2] flex flex-col items-left justify-center  gap-4 p-6 text-lg bg-natural-orchid  text-natural-white font-interExtraBold transition-all ease-in duration-500 md:text-natural-dark-purple md:bg-natural-light-orchid md:flex md:flex-row md:gap-8 md-z-auto md:text-lg md:static md:p-0 ${
              navBar ? "block" : "hidden"
            }`}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <Button value="Login" />
        <span className="block text-2xl text-natural-orchid cursor-pointer md:hidden transition-all ease-in duration-500" onClick={() => setNavBar(!navBar)}>
          {navBar ? <RiCloseLine /> : <RiMenu3Line />}
        </span>
      </header>
    </>
  );
};

export default NavigationBar;
