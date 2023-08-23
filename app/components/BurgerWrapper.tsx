"use client";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Burgerinfo from "./BurgerInfo";
import { dataForBurger } from "./Cards/constants/dataForBurger";

const BurgerWrapper = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <header className="bg-burger-bg flex justify-around items-center border-2 border-golden">
        <Hamburger toggled={nav} toggle={setNav} />
        <nav
          className={`h-[100vh] fixed top-[0px] flex flex-col w-full md:hidden bg-burger-bg z-40 duration-1000 ${
            nav ? "right-[0px]" : "right-[-100vw]"
          } `}
        >
          <div className="flex flex-col justify-around mt-32 m-2 text-white text-3xl font-semibold uppercase">
            {dataForBurger.map(({ id, title, href }) => (
              <Burgerinfo
                href={href}
                onClick={() => setNav(!nav)}
                key={id}
                title={title}
              />
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default BurgerWrapper;
