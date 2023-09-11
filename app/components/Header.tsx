import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 w-full bg-main">
      <div className="flex justify-between p-5">
        <Logo />
        <NavBar />
      </div>
      <div className="relative z-20 h-px bg-gradient-sf" />
    </div>
  );
};

export default Header;
