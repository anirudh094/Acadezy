import React from "react";
import Container from "react-bootstrap/esm/Container";
import "../css/home.css";
import ContactUs from "./ContactUs";

export default function HomePage() {
  return (
    <>
      {/* FIRST BANNER */}

      <div className="first-banner-0">
        <div className="side-color main-color-bg main-color">1</div>
        <div className="first-banner">
          <div className="rotating-heading main-color"></div>
          <div className="fixed-heading">Learn today for better tomorrow</div>
          <button className="banner-btn main-color-bg">View More</button>
        </div>
        <img src="images/image1.jpg" />
      </div>

      <Container>
        <div className="container flex justify-center mx-auto pt-16">
          <div>
            <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
              Courses
            </h1>
          </div>
        </div>
        <div className="w-full bg-gray-100 px-10 pt-10">
          <div div className="container mx-auto">
            <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
              <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="images/download.png"
                        alt="#java"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                      Java Development
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      Mentorship from industry experts
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      <button id="View" className="view-course">
                        {" "}
                        Basics{" "}
                      </button>{" "}
                      <br></br> <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Moderate{" "}
                      </button>
                      <br></br>
                      <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Expertise{" "}
                      </button>
                      <br></br>
                      <br></br>
                    </p>
                    {/* <div className="w-full flex justify-center pt-5 pb-5">
                       
                      </div> */}
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="images/web development.png"
                        alt="#java"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16" id="course">
                    <div className="font-bold text-3xl text-center pb-1">
                      Web Development
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      One-to-One Mentorship
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      <button id="View" className="view-course">
                        {" "}
                        Basics{" "}
                      </button>{" "}
                      <br></br> <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Moderate{" "}
                      </button>
                      <br></br>
                      <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Expertise{" "}
                      </button>
                      <br></br>
                      <br></br>
                    </p>
                    {/* <div className="w-full flex justify-center pt-3 pb-3">
                        <p className="text-black-400 text-sm text-center font-Times New Roman ">
                        Web development is the work involved in developing a website for the Internet .</p>
                      </div> */}
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="images/digital-marketing.png"
                        alt="#digital-marketing"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                      Digital Marketing
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      Online-Marketing Wizard
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      <button id="View" className="view-course">
                        {" "}
                        Basics{" "}
                      </button>{" "}
                      <br></br> <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Moderate{" "}
                      </button>
                      <br></br>
                      <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Expertise{" "}
                      </button>
                      <br></br>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="images/data-science.png"
                        alt="#teammember4"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                      Data Science
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      Data is the next big thing
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      <button id="View" className="view-course">
                        {" "}
                        Basics{" "}
                      </button>{" "}
                      <br></br> <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Moderate{" "}
                      </button>
                      <br></br>
                      <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Expertise{" "}
                      </button>
                      <br></br>
                      <br></br>
                    </p>
                    {/* <div className="w-full flex justify-center pt-5 pb-5">
                        
                      </div> */}
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="images/c++.png"
                        alt="#teammember5"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                      C++ Development
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      lorem ipsum
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      <button id="View" className="view-course">
                        {" "}
                        Basics{" "}
                      </button>{" "}
                      <br></br> <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Moderate{" "}
                      </button>
                      <br></br>
                      <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Expertise{" "}
                      </button>
                      <br></br>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="images/data-analysis.png"
                        alt="#data-analysis"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                      Data Analysis
                    </div>
                    <p className="text-gray-800 text-sm text-center">data</p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      <button id="View" className="view-course">
                        {" "}
                        Basics{" "}
                      </button>{" "}
                      <br></br> <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Moderate{" "}
                      </button>
                      <br></br>
                      <br></br>
                      <button id="View" className="view-course">
                        {" "}
                        Expertise{" "}
                      </button>
                      <br></br>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactUs/>
          </div>
        </div>
      </Container>
    </>
  );
}
