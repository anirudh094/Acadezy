import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationalRoutes from "./pages/NavigationalRoutes";
import NavbarHeader from "./pages/Navbar";
import Testimonials from "./pages/Testimonials"
import FooterBar from "./pages/Footer";
// import "../public/css/home.css";

function App() {
  return (
    <Router>
      <NavbarHeader />
      <NavigationalRoutes />
      <Testimonials />
      <FooterBar />
    </Router>
  );
}

export default App;
