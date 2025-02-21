import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/EmployerPage.module.css";

const EmployerPage = () => {
  return (
    <div className={styles.employerPage}>
      <h1>Welcome to the Employer Portal</h1>
      <p>
        As an employer, you can sign in to manage job postings or sign up to
        create an account and start hiring.
      </p>

      <div className={styles.buttonsContainer}>
        <div className={styles.buttonWrapper}>
          <Link to="/employer-signin" className={`${styles.btnSignIn}`}>
            Sign In
          </Link>
        </div>

        <div className={styles.buttonWrapper}>
          <Link to="/employer-signup" className={`${styles.btnSignUp}`}>
            Sign Up
          </Link>
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <h3>What to Expect:</h3>
        <p>
          Once you sign in, you'll be able to manage your job postings, search
          for skilled workers, and view who has applied for your job listings.
          Whether you're posting new opportunities or managing applicants, our
          platform is here to make the hiring process easier for you.
        </p>
        <ul>
          <li>Post job openings</li>
          <li>Search for qualified workers</li>
          <li>View applications from interested candidates</li>
          <li>Manage and track your job postings</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployerPage;
