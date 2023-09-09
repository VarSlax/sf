'use client';

import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import NavLink from './NavLink';
import { links } from '../constants';
import { isMobile } from '../utils';

const NavBarMoblile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-around items-center">
      <div className="border-2 border-golden md:hidden">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
      <nav
        className={`h-[100vh] fixed top-0 flex flex-col w-full md:hidden bg-main z-10 duration-1000 ${
          open ? 'right-0' : 'right-[-100vw]'
        }`}
      >
        <div className="text-center flex flex-col justify-around mt-28 m-4 text-2xl font-semibold uppercase">
          {links.map(props => (
            <NavLink
              {...props}
              key={props.href}
              onClick={() => setOpen(!open)}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBarMoblile;
