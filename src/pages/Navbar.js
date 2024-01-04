import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import { Navbar, Nav } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
import React from 'react';

function NavbarHeader() {
  const ChartIcon = ({ size }) => <SearchIcon style={{ fontSize: size, marginRight: 10 }} />;
  const [size, setSize] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  return (
    <>
    
    <Navbar>
    <Navbar.Brand href="#">
        <div className="logo">
            <img src="images/2.png"></img>
        </div>
    </Navbar.Brand>
    <Nav className='menu-top-bar'>
      <Nav.Item>
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
        </Nav.Item>
      <Nav.Item><Link className="nav-links nav-links-home" to={"/"}>Home</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/products"}>Internship</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/aboutus"}>About Us</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/contactus"}>Contact Us</Link></Nav.Item>
    </Nav>
    <Nav pullRight className='menu-top-bar'>
      <Nav.Item>
        <Link className="nav-links nav-links-register main-color-bg" to={"/contactus"}>
          Register Now
        </Link>
        <Link className="nav-links nav-links-login main-color-bg" to={"/contactus"}>
          Login
        </Link>
        </Nav.Item>
    </Nav>
    <Nav pullRight className="menu-side-bar">
    <ButtonToolbar>
        <Button onClick={() => handleOpen("300px")}>Open</Button>
      </ButtonToolbar>

      <Drawer size={size} open={open} onClose={() => setOpen(false)}>
        <Drawer.Body>
          <Nav >
            <Nav.Item>
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
              </Nav.Item>
            <Nav.Item><Link className="nav-links nav-links-home" to={"/"}>Home</Link></Nav.Item>
            <Nav.Item><Link className="nav-links" to={"/products"}>Internship</Link></Nav.Item>
            <Nav.Item><Link className="nav-links" to={"/aboutus"}>About Us</Link></Nav.Item>
            <Nav.Item><Link className="nav-links" to={"/contactus"}>Contact Us</Link></Nav.Item>
            <Nav.Item>
              <Link className="nav-links nav-links-register main-color-bg" to={"/contactus"}>
                Register Now
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-links nav-links-login main-color-bg" to={"/contactus"}>
                Login
              </Link>
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