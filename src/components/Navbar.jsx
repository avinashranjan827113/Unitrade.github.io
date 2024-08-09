import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import toast from "react-hot-toast";

const Navbar = (props) => {
  const [show, setShow] = useState(false);
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <>
      <nav className="header">
        <img className="logo" src="./public/logo.png" />
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="separate">
            <div className="links active">
              {data[0].navbarLinks.map((element) => (
                <Link className="insidelink"
                  to={element.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={element.id}
                >
                  {element.title}
                </Link>
              ))}
            </div>
            {/* <button className='menuBtn'><NavLink to="/sell">+ SELL</NavLink></button> */}
            {!isLoggedIn && <a href="/login" className="menuBtn login">
                            <button onClick={()=>{
                              setIsLoggedIn(false);
                              toast.success("Logged In")
                            }}>Login</button>
                           </a>}                
            {!isLoggedIn && <a href="/signup" className="menuBtn">
                            <button onClick={()=>{
                              setIsLoggedIn(false);
                            }}>Sign up</button>
                           </a>}

            {isLoggedIn && <a href="/" className="menuBtn login">
                            <button onClick={()=>{
                              setIsLoggedIn(false);
                              toast.success("Logged Out")
                            }}>Log Out</button>
                           </a>}

            {isLoggedIn && <a href="/" className="menuBtn">
                            <button onClick={()=>{
                            }}>Dashboard</button>
                           </a>}
          </div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;



