import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';

function LoginBox() {

  return (
    <Routes>
      <Route exact path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default LoginBox;
