import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'rsuite';
import MenuIcon from '@rsuite/icons/Menu';
import { Drawer, ButtonToolbar, Button, Modal } from 'rsuite';
import Login from "./LoginPage/SignUp";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../pages/firebaseconfig";
import "../App.css";

function NavbarHeader () {
  const MenuUIcon = ({ size }) => <MenuIcon style={{ fontSize: size, marginRight: 10 }} />;
  const [size, setSize] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };

  const [loginopen, setLoginOpen] = React.useState(false);
  const loginhandleOpen = () => setLoginOpen(true);
  const loginhandleClose = () => setLoginOpen(false);
  //const [backdrop, setBackdrop] = React.useState(true);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    localStorage.clear();
    window.location.reload();
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>

    <Navbar>
    <Navbar.Brand href="#">
        <div className="logo">
            {/* <img src="images/logo_name.png" alt="logo"></img> */}
            <svg viewBox="0 0 369.89473684210526 83.48527231637962" class="looka-1j8o68f"><defs id="SvgjsDefs2133"></defs><g id="SvgjsG2134" featurekey="QMusi1-0" transform="matrix(0.9595296444047374,0,0,0.9595296444047374,-1.9382468893899665,-6.234567144123886)" fill="#04042c"><title xmlns="http://www.w3.org/2000/svg">77 all</title><path xmlns="http://www.w3.org/2000/svg" d="M18.66,48.94,2.57,56.36a1,1,0,0,0-.27.19l-.06.07a1,1,0,0,0-.15.22l0,.09a1,1,0,0,0-.07.35V75.09a1,1,0,0,0,.58.91l16.08,7.41a1,1,0,0,0,.84,0l7.6-3.5L50.67,93.37a1,1,0,0,0,1,0l22.26-13,6.58,3a1,1,0,0,0,.84,0L97.43,76a1,1,0,0,0,.58-.91V57.27a1,1,0,0,0-.07-.35l0-.09a1,1,0,0,0-.15-.22l-.06-.07a1,1,0,0,0-.27-.19L81.34,48.94a1,1,0,0,0-.38-.08l0-12.24a1,1,0,0,0-.5-.86l-12.32-7V14.91a1,1,0,0,0-.07-.35l0-.09a1,1,0,0,0-.15-.22l-.06-.07a1,1,0,0,0-.27-.19L51.43,6.59a1,1,0,0,0-.84,0L34.51,14a1,1,0,0,0-.27.19l-.06.07a1,1,0,0,0-.15.22l0,.09a1,1,0,0,0-.07.35V28.75L21.44,36a1,1,0,0,0-.5.87l0,12.73-1.5-.69A1,1,0,0,0,18.66,48.94Zm.42,2,13.7,6.31-13.7,6.31L5.38,57.27Zm8,26.66-.06.11-7,3.21V65.32l14.08-6.49V74.45l-7,3.21ZM4,58.83l14.08,6.49V80.94L4,74.45Zm61.85,0,14.08,6.49V80.94L65.84,74.45ZM81.93,80.94V65.32L96,58.83V74.45Zm12.7-23.67-13.7,6.31-13.7-6.31L80.93,51ZM35.93,16.47,50,23V38.59L35.93,32.09ZM52,23l14.08-6.49V32.09L52,38.59ZM51,8.6l13.7,6.31L51,21.22l-13.7-6.31ZM22.95,37.47l11-6.41v1.67a1,1,0,0,0,.58.91l16.08,7.41a1,1,0,0,0,.84,0l16.08-7.41a1,1,0,0,0,.58-.91V31l10.83,6.18,0,12.44L64.42,56.36a1,1,0,0,0-.27.19l-.06.07a1,1,0,0,0-.15.22l0,.09a1,1,0,0,0-.07.35V75.09a1,1,0,0,0,.58.91l7.29,3.36-20.55,12L29.33,78.88,35.58,76a1,1,0,0,0,.58-.91V57.27a1,1,0,0,0-.07-.35l0-.09a1,1,0,0,0-.15-.22l-.06-.07a1,1,0,0,0-.27-.19L22.86,50.5H23Z"></path></g><g id="SvgjsG2135" featurekey="UyNsn2-0" transform="matrix(3.517385950839147,0,0,3.517385950839147,110.80408656278387,-12.119446900822979)" fill="#04042c"><path d="M4.1 8.2 l-1.42 0 l1.3 -2.48 l4.4 0 l4.48 14.28 l-3.44 0 l-0.8 -2.86 l-0.78 0.06 l-2.78 0 l-0.68 -0.06 l-0.82 2.86 l-3.22 0 z M7.84 14.42 l-1.32 -4.76 l-1.4 4.76 l2.72 0 z M22.2 18.88 c-0.53334 0.42666 -1.1067 0.74334 -1.72 0.95 s-1.24 0.31 -1.88 0.31 c-0.69334 0 -1.3467 -0.09334 -1.96 -0.28 s-1.15 -0.49 -1.61 -0.91 s-0.82334 -0.96666 -1.09 -1.64 s-0.4 -1.49 -0.4 -2.45 c0 -0.94666 0.13334 -1.7567 0.4 -2.43 s0.63 -1.2267 1.09 -1.66 s0.99666 -0.75334 1.61 -0.96 s1.2667 -0.31 1.96 -0.31 c0.42666 0 0.89332 0.06 1.4 0.18 s1.0133 0.3 1.52 0.54 l-1.32 2.16 c-0.22666 -0.10666 -0.49332 -0.18332 -0.79998 -0.22998 s-0.57332 -0.07 -0.79998 -0.07 c-0.61334 0 -1.1233 0.21666 -1.53 0.65 s-0.61 1.1433 -0.61 2.13 c0 0.50666 0.05334 0.92 0.16 1.24 s0.25666 0.58 0.45 0.78 s0.42 0.34666 0.68 0.44 s0.54334 0.15334 0.85 0.18 c0.41334 0.04 0.82334 0.0066602 1.23 -0.1 s0.77 -0.28 1.09 -0.52 z M28.459999999999997 15.42 c-0.13334 -0.02666 -0.2733 -0.04338 -0.41996 -0.050038 s-0.27332 -0.01 -0.37998 -0.01 c-0.56 0 -1.0133 0.08666 -1.36 0.26 s-0.52 0.47334 -0.52 0.9 c0 0.26666 0.06334 0.47666 0.19 0.63 s0.28332 0.26668 0.46998 0.34002 s0.38332 0.11668 0.58998 0.13002 s0.38332 0.02 0.52998 0.02 c0.26666 0 0.56666 -0.03334 0.9 -0.1 l0 -2.12 z M27.419999999999998 13.219999999999999 c0.10666 0 0.24996 0.0033594 0.42996 0.01002 s0.38334 0.01666 0.61 0.03 c-0.01334 -0.52 -0.19668 -0.85666 -0.55002 -1.01 s-0.81 -0.23 -1.37 -0.23 c-0.30666 0 -0.66 0.03666 -1.06 0.11 s-0.83334 0.18334 -1.3 0.33 l-0.32 -1.1 c-0.04 -0.14666 -0.09666 -0.36 -0.17 -0.64 s-0.12334 -0.5 -0.15 -0.66 c0.66666 -0.22666 1.2967 -0.39 1.89 -0.49 s1.13 -0.15 1.61 -0.15 c1.4133 0 2.5066 0.33666 3.28 1.01 s1.16 1.75 1.16 3.23 l0 5.86 c-0.52 0.14666 -1.12 0.29 -1.8 0.43 s-1.4133 0.21 -2.2 0.21 c-0.69334 0 -1.3233 -0.06 -1.89 -0.18 s-1.0533 -0.32 -1.46 -0.6 s-0.72 -0.64666 -0.94 -1.1 s-0.33 -1.0067 -0.33 -1.66 s0.13666 -1.2 0.41 -1.64 s0.62668 -0.79 1.06 -1.05 s0.92 -0.44334 1.46 -0.55 s1.0833 -0.16 1.63 -0.16 z M41.94 5.98 l0.000019531 13.74 c-0.48 0.10666 -0.94666 0.18666 -1.4 0.24 s-0.86668 0.09334 -1.24 0.12 s-0.69334 0.04 -0.96 0.04 l-0.54 0 c-0.90666 0 -1.67 -0.14 -2.29 -0.42 s-1.12 -0.66 -1.5 -1.14 s-0.65666 -1.0367 -0.83 -1.67 s-0.26 -1.31 -0.26 -2.03 c0 -0.92 0.11666 -1.71 0.35 -2.37 s0.56 -1.2033 0.98 -1.63 s0.92 -0.74332 1.5 -0.94998 s1.2233 -0.31 1.93 -0.31 c0.12 0 0.25666 0.01 0.41 0.03 s0.3 0.04334 0.44 0.07 s0.27 0.05666 0.39 0.09 s0.21334 0.07 0.28 0.11 l0 -1.18 l0.06 -0.26 l-1.8 0 l1.34 -2.48 l3.14 0 z M38.12 17.44 c0.2 0 0.39334 -0.0066602 0.58 -0.02 s0.35332 -0.03334 0.49998 -0.06 l0 -5.12 c-0.09334 -0.01334 -0.2 -0.03334 -0.32 -0.06 c-0.10666 -0.02666 -0.23 -0.04666 -0.37 -0.06 s-0.29666 -0.02 -0.47 -0.02 c-0.62666 0 -1.1533 0.21334 -1.58 0.64 s-0.64 1.1333 -0.64 2.12 c0 0.49334 0.06 0.90668 0.18 1.24 s0.28334 0.6 0.49 0.8 s0.45 0.34 0.73 0.42 s0.58 0.12 0.9 0.12 z M48.39999999999999 9.44 c0.69334 0 1.3166 0.096622 1.87 0.28996 s1.0167 0.50668 1.39 0.94002 s0.66 0.99 0.86 1.67 s0.3 1.5 0.3 2.46 l0 0.31 l-0.04 0.63 l-5.6 0 l-0.42 -0.06 c0.01334 0.38666 0.05668 0.69666 0.13002 0.93 s0.18 0.41668 0.32 0.55002 s0.31 0.22668 0.51 0.28002 s0.42666 0.08668 0.68 0.10002 c0.41334 0.02666 0.77 -0.03334 1.07 -0.18 s0.58334 -0.44666 0.85 -0.9 c0.41334 0.13334 0.79334 0.26 1.14 0.38 c0.29334 0.10666 0.56 0.2 0.8 0.28 s0.36 0.11334 0.36 0.1 c-0.48 1 -1.0633 1.73 -1.75 2.19 s-1.51 0.69 -2.47 0.69 c-0.70666 0 -1.3467 -0.09334 -1.92 -0.28 s-1.06 -0.49 -1.46 -0.91 s-0.71 -0.96666 -0.93 -1.64 s-0.33 -1.4967 -0.33 -2.47 c0 -0.94666 0.11 -1.7567 0.33 -2.43 s0.53 -1.2267 0.93 -1.66 s0.88666 -0.75334 1.46 -0.96 s1.2133 -0.31 1.92 -0.31 z M49.49999999999999 13.440000000000001 l0.30004 0.04 c-0.02666 -0.46666 -0.15 -0.83 -0.37 -1.09 s-0.56334 -0.39 -1.03 -0.39 c-0.53334 0 -0.91668 0.13 -1.15 0.39 s-0.37668 0.62334 -0.43002 1.09 c0.06666 -0.01334 0.12666 -0.02334 0.18 -0.03 s0.11334 -0.01 0.18 -0.01 l2.32 0 z M57.819999999999986 17.38 l4.58 0 l0 2.62 l-8.46 0 l0 -2.26 l0.33 -0.37 l0.84 -0.94 l1.13 -1.26 l1.2 -1.33 l1.04 -1.16 l0.68 -0.74 l-0.32 0.1 l-2.32 0 l0 1.1 l-2.5 -0.76 l0 -2.82 l8.26 0 l0 2.36 z M63.079999999999984 9.56 l3.36 0 l1.9 7.8 l2.18 -7.8 l3.14 0 l-2.3 7.66 c-0.25334 0.84 -0.50334 1.6767 -0.75 2.51 s-0.49 1.65 -0.73 2.45 c-0.16 0.50666 -0.35 0.92666 -0.57 1.26 s-0.47334 0.6 -0.76 0.8 s-0.60332 0.34 -0.94998 0.42 s-0.72666 0.12 -1.14 0.12 c-0.33334 0 -0.69668 -0.03666 -1.09 -0.11 s-0.84334 -0.19 -1.35 -0.35 l1.16 -2.16 l0.49 0.07 l0.33 0.03 c0.13334 0 0.26668 -0.01 0.40002 -0.03 s0.26334 -0.07 0.39 -0.15 s0.24666 -0.21 0.36 -0.39 s0.21668 -0.43 0.31002 -0.75 l0.14 -0.6 l0.28 -0.34 l-1.76 0 z"></path></g></svg>
        </div>
    </Navbar.Brand>
    <Nav pullRight className='menu-top-bar'>
      <Nav.Item><Link className="nav-links nav-links-home" to={"/"}>Home</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/products"}>Internship</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/aboutus"}>About Us</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/contactus"}>Contact Us</Link></Nav.Item>
    
      <Nav.Item>
          <div>
            {authUser ? (
              <>
                <Link className="nav-links nav-links-login" onClick={userSignOut}>
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-links nav-links-login" onClick={loginhandleOpen}>
                  SignUp
                </Link>
                <Modal  open={loginopen} onClose={loginhandleClose}><Login/></Modal> 
                {/* <Link className="nav-links nav-links-login main-color-bg" to={"/signup"}>
                  SignUp
                </Link> */}
              </>
            )}
          </div>
        
      </Nav.Item>
    </Nav>
    <Nav pullRight className="menu-side-bar">
    <ButtonToolbar>
        <Button onClick={() => handleOpen("300px")}><span><MenuUIcon size="30px" /></span></Button>
      </ButtonToolbar>

      <Drawer size={size} open={open} onClose={() => setOpen(false)}>
        <Drawer.Body>
          <Nav className="nav_side_bar">
            <Nav.Item><Link className="nav-links nav-links-home" to={"/"}>Home</Link></Nav.Item>
            <Nav.Item><Link className="nav-links" to={"/products"}>Internship</Link></Nav.Item>
            <Nav.Item><Link className="nav-links" to={"/aboutus"}>About Us</Link></Nav.Item>
            <Nav.Item><Link className="nav-links" to={"/contactus"}>Contact Us</Link></Nav.Item>
            {/* <Nav.Item>
              <Link className="nav-links nav-links-register main-color-bg" to={"/contactus"}>
                Register Now
              </Link>
            </Nav.Item> */}
            <Nav.Item>
              <div>
                {authUser ? (
                  <>
                    <Link className="nav-links nav-links-login" onClick={userSignOut}>
                      Log Out
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="nav-links nav-links-login" onClick={loginhandleOpen}>
                      Login
                    </Link>
                    <Modal open={loginopen} onClose={loginhandleClose}><Login/></Modal>
                  </>
                )}
              </div>
            </Nav.Item>
          </Nav>
        </Drawer.Body>
      </Drawer>
    </Nav>
  </Navbar>
  </>
  );
}

export default NavbarHeader;