import NavBarMoblile from './NavBarMobile';
import NavLink from './NavLink';
import { links } from '../constants';
import { isMobile } from '../utils';

const NavBar = () => {
  const { phone } = isMobile();

  return phone ? (
    <NavBarMoblile />
  ) : (
    <div className="flex items-center justify-around ml-5 text-2xl font-semibold uppercase">
      {links.map(props => (
        <NavLink {...props} key={props.href} />
      ))}
    </div>
  );
};

export default NavBar;
