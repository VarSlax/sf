import NavBar from './NavBar';
import Logo from './Logo';

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-5">
        <Logo />
        <NavBar />
      </div>
      <div className="sticky z-20 h-px bg-gradient-sf" />
    </>
  );
};

export default Header;
