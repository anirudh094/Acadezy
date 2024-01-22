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
            <img src="images/logo_name.png" alt="logo"></img>
        </div>
    </Navbar.Brand>
    <Nav className='menu-top-bar'>
      {/* <Nav.Item>
          <Form className="d-flex">
              <InputGroup className="nav-search-border"> 
              <Form.Control
                type="search"
                placeholder="Search Here"
                className="nav-search"
                aria-label="Search"
              />
              <span><ChartIcon size="20px" /></span>
              
              </InputGroup>
          </Form>
        </Nav.Item> */}
      <Nav.Item><Link className="nav-links nav-links-home" to={"/"}>Home</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/products"}>Internship</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/aboutus"}>About Us</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/contactus"}>Contact Us</Link></Nav.Item>
    </Nav>
    <Nav pullRight className='menu-top-bar'>
      <Nav.Item>
        {/* <Link className="nav-links nav-links-register main-color-bg" to={"/contactus"}>
           Register Now
        </Link> */}
          <div>
            {authUser ? (
              <>
                <Link className="nav-links nav-links-login main-color-bg" onClick={userSignOut}>
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-links nav-links-login main-color-bg" onClick={loginhandleOpen}>
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
                    <Link className="nav-links nav-links-login main-color-bg" onClick={userSignOut}>
                      Log Out
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="nav-links nav-links-login main-color-bg" onClick={loginhandleOpen}>
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