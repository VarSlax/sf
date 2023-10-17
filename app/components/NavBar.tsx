import NavBarMoblile from "./NavBarMobile";
import NavLink from "./NavLink";
import { links } from "../constants";
import { isMobile } from "../utils";

const NavBar = () => {
  const { phone } = isMobile();

  return phone ? (
    <NavBarMoblile />
  ) : (
    <div className="ml-5 flex items-center justify-around text-2xl font-semibold uppercase">
      {links.slice(0, -1).map((props) => (
        <NavLink {...props} key={props.href} />
      ))}
    </div>
  );
};

export default NavBar;
