import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className=" bg-customRed  relative h-48 flex p-8">
      <div className="flex items-center">
        <img className="rounded-full" width={200} src={logo} alt="" />
      </div>
      <div className="ml-auto mr-auto relative">
        <div className="text-white mt-10">
          <h1 className="text-balance text-5xl font-bold">SARKARIEXAMTRICKS</h1>
          <span className="m-20 border-b-2 border-dotted">
            <a href="https://sarkariexamtricks.com/">
              <i class="fa-solid fa-magnifying-glass"></i>
              WWW.Sarkariexamtricks.com
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
