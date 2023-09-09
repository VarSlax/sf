"use client";

import React, { useState } from "react";
import Hamburger from "hamburger-react";
import NavLink from "./NavLink";
import { links } from "../constants";
import { isMobile } from "../utils";

const NavBarMoblile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-around">
      <div className="border-2 border-golden lg:hidden">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
      <nav
        className={`fixed top-0 z-10 flex h-[100vh] w-full flex-col bg-main duration-1000 lg:hidden ${
          open ? "right-0" : "right-[-100vw]"
        }`}
      >
        <div className="m-4 mt-28 flex flex-col justify-around text-center text-2xl font-semibold uppercase">
          {links.map((props) => (
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
