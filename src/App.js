import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationalRoutes from "./pages/NavigationalRoutes";
import NavbarHeader from "./pages/Navbar";
import Testimonials from "./pages/Testimonials"
import Partners from "./pages/Partners.js"
import FooterBar from "./pages/Footer";
import PopUp from "./pages/PopUp";
import { useState , useEffect} from "react";
import { FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// import "../public/css/home.css";

function App() {

  const[timedPopUp, settimedPopUp] = useState(false);

useEffect( () =>{
  setTimeout(() =>{
    settimedPopUp(true);
},3000);
}, []);
 
  return (
    <Router>
      <NavbarHeader />
      <NavigationalRoutes />
      <Testimonials />
      <Partners />
     <PopUp trigger={timedPopUp} setTrigger={settimedPopUp}>
       
       <form className="login-popup" id="login-popup">
       <div className="mb-6" id="pop">
                    <input
                      type="text"
                      placeholder="Your Name"
                      aria-label="text"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-[95%] m-2 customPlaceholder bg-[#7a959b] rounded border py-3 px-[10px] text-base outline-none focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      aria-label="text"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-[95%] m-2 rounded border py-3 px-[10px] bg-[#7a959b] text-base outline-none customPlaceholder focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Phone"
                      aria-label="text"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-[95%] m-2 bg-[#7a959b] customPlaceholder rounded border py-3 px-[10px] text-base outline-none focus-visible:shadow-none"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full main-color-bg text-white font-bold rounded border p-3 transition hover:bg-opacity-90"
                      id="login"
                    >
                      Login
                    </button>
                  </div>
                  <br></br> 
                  <div className="mb-6" id="signup">
                    Or Sign Up 
                    </div>
                      

                      <div style={{ display: 'flex', alignItems: 'center' }} id="icons">
                        <button className="google" id="google-icon">
                          <FcGoogle style={{ marginRight: '25px' }} size={30}/>
                          </button>
                      
                        <button className="github" id="github-icon"> <FaGithub size={30}/></button>
                      
                      </div>
                      </form>
     </PopUp>
      

      <FooterBar />
    </Router>
    
    
  );
}

export default App;






