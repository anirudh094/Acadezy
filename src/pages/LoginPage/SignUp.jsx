import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseconfig";
import GoogleLogin from "../LoginPage/loginwithgoogle";
import "../LoginPage/loginpage.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        localStorage.setItem("email",userCredential.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        localStorage.setItem("email", userCredential.user.email);
        alert("Login Done");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCard
            className="bg-dark text-white mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <MDBTabs className="d-flex flex-row align-items-center mx-auto">
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("tab1")}
                    active={basicActive === "tab1"}
                  >
                    <h2 className="fw-bold text-uppercase modal-heading">
                      SignUp
                    </h2>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("tab2")}
                    active={basicActive === "tab2"}
                  >
                    <h2 className="fw-bold text-uppercase modal-heading">
                      Login
                    </h2>
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
              <MDBTabsContent className="d-flex flex-column align-items-center mx-auto login-detail-box">
                <MDBTabsPane open={basicActive === "tab1"}>
                  <form onSubmit={signUp}>
                    <div className="d-flex flex-column align-items-center mx-auto">
                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        label="Email address"
                        id="formControlLg"
                        type="email"
                        size="lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        label="Password"
                        id="formControlLg"
                        type="password"
                        size="lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <p className="small mb-3 pb-lg-2">
                        <a class="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>
                      <MDBBtn
                        outline
                        className="mx-2 px-5 modal-login-button"
                        color="white"
                        size="lg"
                        type="submit"
                      >
                        SignUp
                      </MDBBtn>

                      <div className="d-flex flex-row mt-3 mb-5">
                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon fab icon="facebook-f" size="lg" />
                        </MDBBtn>

                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon fab icon="twitter" size="lg" />
                        </MDBBtn>
                        <GoogleLogin />
                      </div>
                    </div>
                  </form>
                </MDBTabsPane>
                <MDBTabsPane open={basicActive === "tab2"}>
                  <form onSubmit={signIn}>
                    <div className="d-flex flex-column align-items-center mx-auto">
                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        label="Email address"
                        id="formControlLg"
                        type="email"
                        size="lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        label="Password"
                        id="formControlLg"
                        type="password"
                        size="lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <p className="small mb-3 pb-lg-2">
                        <a class="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>
                      <MDBBtn
                        outline
                        className="mx-2 px-5 modal-login-button"
                        color="white"
                        size="lg"
                        type="submit"
                      >
                        Login
                      </MDBBtn>

                      <div className="d-flex flex-row mt-3 mb-5">
                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon fab icon="facebook-f" size="lg" />
                        </MDBBtn>

                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon fab icon="twitter" size="lg" />
                        </MDBBtn>

                        <GoogleLogin />
                      </div>
                    </div>
                  </form>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default SignUp;
