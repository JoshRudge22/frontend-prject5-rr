import React from "react";
import SignUpForm from "../components/auth/SignUpForm";
import signUpStyles from "../styles/SignUpForm.module.css";

const SignUp = () => {
  return (
    <div className={signUpStyles.pageWrapper}>
      <h2 className={signUpStyles.header}>Create An Account Here</h2>
      <SignUpForm />
    </div>
  );
};

export default SignUp;

