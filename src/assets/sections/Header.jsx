import { xora } from "../images";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src={xora} alt="logo" width={115} height={55} />
        </a>
      </div>
    </header>
  );
};

export default Header;
