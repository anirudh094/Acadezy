import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationalRoutes from "./pages/NavigationalRoutes";
import NavbarHeader from "./pages/Navbar";
import Testimonials from "./pages/Testimonials"
import Partners from "./pages/Partners.js"
import FooterBar from "./pages/Footer";
// import "../public/css/home.css";

function App() {
  return (
    <Router>
      <NavbarHeader />
      <NavigationalRoutes />
      <Testimonials />
      <Partners />
      <FooterBar />
    </Router>
    
    
  );
}

export default App;






