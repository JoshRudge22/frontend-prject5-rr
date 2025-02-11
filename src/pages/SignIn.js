import React from "react";
import SignInForm from "../components/auth/SignInForm";
import signInStyles from "../styles/SignInForm.module.css";

const SignIn = () => {
  return (
    <div className={signInStyles.pageWrapper}>
      <h2 className={signInStyles.header}>Sign In to Your Account</h2>
      <SignInForm />
    </div>
  );
};

export default SignIn;
