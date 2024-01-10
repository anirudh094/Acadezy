import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import "../css/home.css";

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
        <img src="images/1.png"/>
      </div>

      <Container>
        {/* <div class="about-us-section" id="about-us">
          <h2 className="text-center main-color font-bold">VARS Grad</h2>
          <h3 className="text-center main-color font-bold">
            Learn, intern, earn.
          </h3>
          <p className="text-center">
          EdTech, short for Educational Technology, harnesses digital tools and platforms to enhance teaching, learning, and skill development.
           It encompasses diverse resources, from interactive apps to online courses, revolutionizing education worldwide.
          </p>
        </div> */}

          {/* <Carousel variant="dark">
        <Carousel.Item className="header">
          <img
            className="d-block w-100 cover-picture"
            src="images/web.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="header">
          <img
            className="d-block w-100  cover-picture"
            src="images/marketing.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="header">
          <img
            className="d-block w-100 cover-picture"
            src="images/web design.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> */}

        {/* <div> */}
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
                    <div className="px-6 mt-16" >
                      <div className="font-bold text-3xl text-center pb-1" >
                      Java Development     
                    
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Mentorship from industry experts
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal" >
                      <button id="View"> Basics </button> <br></br> <br></br>
                     <button id="View"> Moderate </button><br></br><br></br>
                     <button id="View"> Expertise </button><br></br><br></br>
                      </p>
                      {/* <div className="w-full flex justify-center pt-5 pb-5">
                       
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5" >
                  <div className="rounded overflow-hidden shadow-md bg-white" >
                    <div className="absolute -mt-20 w-full flex justify-center" >
                      <div className="h-32 w-32" >
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
                     <button id="View"> Basics </button> <br></br> <br></br>
                     <button id="View"> Moderate </button><br></br><br></br>
                     <button id="View"> Expertise </button><br></br><br></br>
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
                      <button className="View"> Basics </button> <br></br> <br></br>
                     <button className="View"> Moderate </button><br></br><br></br>
                     <button className="View"> Expertise </button><br></br><br></br>
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
                      <button className="View"> Basics </button> <br></br> <br></br>
                     <button className="View"> Moderate </button><br></br><br></br>
                     <button className="View"> Expertise </button><br></br><br></br>
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
                      <button className="View"> Basics </button> <br></br> <br></br>
                     <button className="View"> Moderate </button><br></br><br></br>
                     <button className="View"> Expertise </button><br></br><br></br>
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
                      <p className="text-gray-800 text-sm text-center">
                        data
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      <button className="View"> Basics </button> <br></br> <br></br>
                     <button className="View"> Moderate </button><br></br><br></br>
                     <button className="View"> Expertise </button><br></br><br></br>
                      </p>
                     
                    </div>
                  </div>
                  
                </div>
                
              </div>
              
               {/* <div className="display-flex justify-center">
              <p className="text-gray-800 text-sm text-center ">
              <button className=" bg-#718e94-800 px-6 py-3 text-white rounded-3xl w-40 " id="Courses"> View More Courses</button>
              </p>
              </div>
            </div>
          </div>
        </div>
        

        
        <div className="2xl:container 2xl:mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-10 gap-12 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            Free Shipping Grid Card 
            <div className="flex space-x-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.3155 2.98718C37.3012 2.91809 37.2675 2.85449 37.2184 2.80384C37.1693 2.7532 37.1068 2.71761 37.0381 2.70124C32.4624 1.58249 21.8897 5.56921 16.1616 11.295C15.1399 12.3084 14.2085 13.4089 13.378 14.5841C11.6116 14.4278 9.84517 14.5583 8.3397 15.2145C4.09204 17.0841 2.85532 21.9622 2.51079 24.0606C2.49125 24.1755 2.49862 24.2933 2.53233 24.4048C2.56603 24.5163 2.62515 24.6185 2.70504 24.7033C2.78492 24.7881 2.88339 24.8533 2.99271 24.8936C3.10202 24.9339 3.21919 24.9483 3.33501 24.9356L10.1561 24.1833C10.161 24.6975 10.192 25.2112 10.2491 25.7223C10.2834 26.0773 10.441 26.409 10.6944 26.6598L13.3358 29.295C13.5869 29.5481 13.9185 29.7056 14.2733 29.7403C14.7815 29.7972 15.2924 29.8282 15.8038 29.8333L15.0553 36.6458C15.0428 36.7616 15.0573 36.8787 15.0977 36.9879C15.1381 37.0971 15.2032 37.1955 15.288 37.2754C15.3727 37.3552 15.4748 37.4144 15.5863 37.4481C15.6977 37.4819 15.8155 37.4894 15.9303 37.47C18.0249 37.1341 22.9116 35.8973 24.7702 31.6497C25.4264 30.1442 25.5608 28.3864 25.4092 26.6286C26.5872 25.798 27.6906 24.8663 28.7069 23.8442C34.453 18.127 38.417 7.79031 37.3155 2.98718ZM22.9741 17.0239C22.4494 16.4996 22.092 15.8314 21.9471 15.1039C21.8022 14.3764 21.8763 13.6223 22.1601 12.9369C22.4438 12.2515 22.9245 11.6657 23.5412 11.2535C24.1579 10.8414 24.8831 10.6214 25.6249 10.6214C26.3666 10.6214 27.0918 10.8414 27.7085 11.2535C28.3252 11.6657 28.8059 12.2515 29.0896 12.9369C29.3734 13.6223 29.4475 14.3764 29.3026 15.1039C29.1577 15.8314 28.8003 16.4996 28.2756 17.0239C27.9277 17.3723 27.5145 17.6487 27.0597 17.8373C26.6048 18.0259 26.1173 18.123 25.6249 18.123C25.1325 18.123 24.6449 18.0259 24.1901 17.8373C23.7352 17.6487 23.322 17.3723 22.9741 17.0239Z"
                  fill="#4B5563"
                />
                <path
                  d="M13.1562 31.2055C12.7281 31.6344 12.0414 31.8016 11.2148 31.9445C9.35781 32.2609 7.71797 30.6562 8.05156 28.7789C8.17891 28.0672 8.55547 27.0695 8.78984 26.8352C8.84107 26.7849 8.87517 26.7198 8.8873 26.6491C8.89942 26.5784 8.88895 26.5056 8.85739 26.4412C8.82582 26.3768 8.77475 26.3239 8.71144 26.2902C8.64812 26.2564 8.57578 26.2434 8.50469 26.2531C7.46622 26.3802 6.50011 26.851 5.76016 27.5906C3.92344 29.4289 3.75 36.25 3.75 36.25C3.75 36.25 10.575 36.0765 12.4117 34.2383C13.1536 33.4989 13.6251 32.5313 13.75 31.4914C13.7789 31.1648 13.3812 30.9703 13.1562 31.2055Z"
                  fill="#4B5563"
                />
              </svg>
              <div>
                <p className=" text-xl leading-5 font-semibold text-gray-800 ">
                  Practice Test series included
                </p>
                <p className=" text-base leading-6 font-normal text-gray-600 mt-3">
                  Performance based stipend.
                </p>
              </div>
            </div>

            Support Grid Card

            <div className="flex space-x-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.547 37.5003C29.022 37.5003 26.8798 36.9487 23.672 35.1565C19.7712 32.969 16.754 30.9495 12.8744 27.0799C9.13373 23.3417 7.31342 20.9213 4.76577 16.2854C1.88764 11.051 2.37827 8.30728 2.9267 7.13463C3.57983 5.73306 4.54389 4.89478 5.78998 4.06275C6.49776 3.59903 7.24676 3.20152 8.02748 2.87525C8.10561 2.84166 8.17827 2.80963 8.24311 2.78072C8.62983 2.6065 9.21577 2.34322 9.95795 2.62447C10.4533 2.81041 10.8955 3.19088 11.5876 3.87447C13.0072 5.27447 14.947 8.39244 15.6626 9.92369C16.1431 10.9557 16.4611 11.637 16.4619 12.401C16.4619 13.2956 16.0119 13.9854 15.4658 14.7299C15.3634 14.8698 15.2619 15.0034 15.1634 15.1331C14.5689 15.9143 14.4384 16.1401 14.5244 16.5432C14.6986 17.3534 15.9978 19.7651 18.133 21.8956C20.2681 24.026 22.6103 25.2432 23.4236 25.4167C23.8439 25.5065 24.0744 25.3706 24.8806 24.7549C24.9962 24.6667 25.115 24.5753 25.2392 24.4838C26.072 23.8643 26.7298 23.426 27.6033 23.426H27.608C28.3681 23.426 29.0189 23.7557 30.097 24.2995C31.5033 25.0088 34.715 26.9237 36.1236 28.3448C36.8087 29.0354 37.1908 29.476 37.3775 29.9706C37.6587 30.7151 37.3939 31.2987 37.2212 31.6893C37.1923 31.7542 37.1603 31.8253 37.1267 31.9042C36.7979 32.6835 36.398 33.4309 35.9322 34.137C35.1017 35.3792 34.2603 36.3409 32.8556 36.9948C32.1343 37.336 31.3449 37.5088 30.547 37.5003Z"
                  fill="#4B5563"
                />
              </svg>
              <div>
                <p className=" text-xl leading-5 font-semibold text-gray-800 ">
                  Support 24/7
                </p>
                <p className=" text-base leading-6 font-normal text-gray-600 mt-3">
                  Contact us 24 hours a day at .com
                </p>
              </div>
            </div>

            MonyBack Guarantee card

            <div className="flex space-x-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 37.5V34.6547C12.5414 34.2969 8.76953 31.0984 8.75 26.25H14.375C14.5133 28.3078 16.2391 29.8789 18.75 30.1562V22.5L16.6586 21.9531C11.893 20.8453 9.34297 18.0945 9.34297 13.9781C9.34297 9.12578 12.8188 5.94375 18.75 5.46875V2.5H21.25V5.46875C27.2961 5.96094 30.5469 9.19844 30.625 13.75H25C24.9406 11.8703 23.7633 10.3602 21.25 10.1562V17.3438L23.6578 17.9125C28.7195 19.0203 31.25 21.6406 31.25 25.9375C31.25 30.9641 27.8328 34.2094 21.25 34.6344V37.5H18.75ZM18.75 16.875V10.1562C16.5945 10.275 15.057 11.5992 15.057 13.4789C15.057 15.2211 16.3375 16.3602 18.75 16.875ZM21.25 22.9688V30.1562C24.2305 30.0359 25.6547 28.6781 25.6547 26.5805C25.6547 24.6602 24.2305 23.3672 21.25 22.9688Z"
                  fill="#4B5563"
                />
              </svg>
              <div>
                <p className=" text-xl leading-5 font-semibold text-gray-800 ">
                  Industry ready
                </p>
                <p className=" text-base leading-6 font-normal text-gray-600 mt-3">
                  minimum course duration 2 months.
                </p>
              </div> */}


               <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h1 className="mb-6 main-color  text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h1>
                <p className="text-body-color mb-9 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sapien sit amet nunc accumsan consectetur. Curabitur euismod convallis neque, vitae placerat turpis interdum eget. Quisque auctor metus eu nulla consectetur, sed 
                eleifend turpis fermentum. Ut euismod lorem vitae justo ullamcorper, quis sagittis nunc convallis. Integer sed elit id libero suscipit efficitur.
                  <ul className="p-0">
                    <li>courses offered</li>
                    <li>registeration</li>
                    <li> payment menthods</li>
                    <li>internship and stipend criteria</li>
                    <li>other queries</li>
                  </ul>
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="main-color bg-dark mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="main-color mb-1 text-xl font-bold">
                      mail us at
                    </h4>
                    <p className="text-body-color text-base">
                      edintern24@gmail.com
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="main-color bg-dark font-bold mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="24"
                      height="26"
                      viewBox="0 0 24 26"
                      className="fill-current font-bold"
                    >
                      <path d="M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z" />
                      <path d="M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z" />
                      <path d="M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="main-color mb-1 text-xl font-bold">
                      Contact Number
                    </h4>
                    <p className="text-body-color text-base">
                      +91 6283473775
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="main-color bg-dark mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="28"
                      height="19"
                      viewBox="0 0 28 19"
                      className="fill-current"
                    >
                      <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="main-color mb-1 text-xl font-bold">
                      LinkedIn
                    </h4>
                    <p className="text-body-color text-base">
                      Acadezy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      aria-label="text"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      aria-label="text"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Phone"
                      aria-label="text"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      aria-label="text"
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full main-color-bg text-dark font-bold rounded border p-3 transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#94a596"
                      />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <svg
                      width="34"
                      height="134"
                      viewBox="0 0 34 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="31.9993"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.9993 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.9993 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.9993 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 31.9993 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.9993 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 31.9993 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 31.9993 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 31.9993 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 31.9993 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 31.9993 1.66665)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 17.3333 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 17.3333 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 17.3333 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 17.3333 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 17.3333 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 17.3333 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 17.3333 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 17.3333 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 17.3333 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 17.3333 1.66665)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 2.66536 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 2.66536 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 2.66536 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 2.66536 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 2.66536 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 2.66536 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 2.66536 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 2.66536 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 2.66536 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 2.66536 1.66665)"
                        fill="#94a596"
                      />
                    </svg>
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    <svg
                      width="107"
                      height="134"
                      viewBox="0 0 107 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="104.999"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 104.999 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="104.999"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 104.999 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="104.999"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 104.999 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="104.999"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 104.999 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="104.999"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 104.999 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="104.999"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 104.999 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="104.999"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 104.999 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="104.999"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 104.999 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="104.999"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 104.999 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="104.999"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 104.999 1.66665)"
                        fill="#94a596"
                      />
                      <circle
                        cx="90.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 90.3333 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="90.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 90.3333 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="90.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 90.3333 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="90.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 90.3333 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="90.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 90.3333 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="90.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 90.3333 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="90.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 90.3333 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="90.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 90.3333 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="90.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 90.3333 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="90.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 90.3333 1.66665)"
                        fill="#94a596"
                      />
                      <circle
                        cx="75.6654"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 75.6654 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.9993 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="75.6654"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 75.6654 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.9993 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="75.6654"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 75.6654 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.9993 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="75.6654"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 75.6654 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 31.9993 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="75.6654"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 75.6654 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.9993 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="75.6654"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 75.6654 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 31.9993 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="75.6654"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 75.6654 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 31.9993 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="75.6654"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 75.6654 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 31.9993 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="75.6654"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 75.6654 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 31.9993 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="75.6654"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 75.6654 1.66665)"
                        fill="#94a596"
                      />
                      <circle
                        cx="31.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 31.9993 1.66665)"
                        fill="#94a596"
                      />
                      <circle
                        cx="60.9993"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 60.9993 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 17.3333 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="60.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 60.9993 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 17.3333 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="60.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 60.9993 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 17.3333 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="60.9993"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 60.9993 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 17.3333 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="60.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 60.9993 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 17.3333 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="60.9993"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 60.9993 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 17.3333 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="60.9993"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 60.9993 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 17.3333 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="60.9993"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 60.9993 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 17.3333 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="60.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 60.9993 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 17.3333 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="60.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 60.9993 1.66665)"
                        fill="#94a596"
                      />
                      <circle
                        cx="17.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 17.3333 1.66665)"
                        fill="#94a596"
                      />
                      <circle
                        cx="46.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 46.3333 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 2.66536 132)"
                        fill="#94a596"
                      />
                      <circle
                        cx="46.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 46.3333 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 2.66536 117.333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="46.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 46.3333 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 2.66536 102.667)"
                        fill="#94a596"
                      />
                      <circle
                        cx="46.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 46.3333 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 2.66536 88)"
                        fill="#94a596"
                      />
                      <circle
                        cx="46.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 46.3333 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 2.66536 73.3333)"
                        fill="#94a596"
                      />
                      <circle
                        cx="46.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 46.3333 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 2.66536 45)"
                        fill="#94a596"
                      />
                      <circle
                        cx="46.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 46.3333 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 2.66536 16)"
                        fill="#94a596"
                      />
                      <circle
                        cx="46.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 46.3333 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 2.66536 59)"
                        fill="#94a596"
                      />
                      <circle
                        cx="46.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 46.3333 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 2.66536 30.6666)"
                        fill="#94a596"
                      />
                      <circle
                        cx="46.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 46.3333 1.66665)"
                        fill="#94a596"
                      />
                      <circle
                        cx="2.66536"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 2.66536 1.66665)"
                        fill="#94a596"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
               
            </div>
          </section>
          </div>
        </div>
        </Container>
    </>
  );
}

         

