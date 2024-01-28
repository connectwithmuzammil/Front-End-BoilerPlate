import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggleMenu = () => {
    // console.log("CLICK");
    setOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <header>
        <div className="left">
          <img src="/assets/images/logo.svg" alt="" width="60px" />
        </div>
        <div className={`center ${isOpen ? "open" : "closed"}`}>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact </li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <img src="/assets/images/logo.svg" alt="" width="60px" />
        </div>
        {/* MOBILE */}
        <div className="mobile-menu" onClick={handleToggleMenu}>
          {isOpen ? (
            <IoMdClose color="#fff" size={30} />
          ) : (
            <RxHamburgerMenu color="#fff" size={30}/>
          )}
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
