'use client';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import Burgerinfo from './BurgerInfo';
import { dataForBurger } from './Cards/constants/dataForBurger';

const BurgerWrapper = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <header className="bg-burger-bg flex justify-around items-center">
        <div className="border-2 border-golden md:hidden">
          <Hamburger toggled={nav} toggle={setNav} />
        </div>
        <nav
          className={`h-[100vh] fixed top-0 flex flex-col w-full md:hidden bg-burger-bg z-10 duration-1000 ${
            nav ? 'right-0' : 'right-[-100vw]'
          }`}
        >
          <div className="text-center flex flex-col justify-around mt-28 m-4 text-white text-2xl font-semibold uppercase">
            {dataForBurger.map(({ id, title, href }) => (
              <Burgerinfo
                key={id}
                href={href}
                onClick={() => setNav(!nav)}
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
