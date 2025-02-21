import React from 'react';
import { Link } from 'react-router-dom';
import homeStyles from '../styles/HomePage.module.css';
import buttonStyles from '../styles/Button.module.css';
import signinImage from '../media/signin.jpg';
import signupImage from '../media/signup.jpg';

const HomePage = () => {
  return (
    <div className={homeStyles.homePage}>
      <h1>Welcome to Rudgeys Recruitment!</h1>
      <p>
        Rudgeys Recruitment is the platform where drivers and industrial workers
        can upload their details and either get approved for available work or
        search for new job opportunities. Whether you're looking to find work or
        offer your skills, we're here to help connect you with the right opportunities.
      </p>

      <div className={homeStyles.buttonsContainer}>
        <div className={homeStyles.leftSide}>
          <div className={homeStyles.imageContainer}>
            <Link to="/signin">
              <img
                className={homeStyles.image}
                src={signinImage}
                alt="Sign In"
              />
            </Link>
          </div>
          <Link to="/signin" className={`${buttonStyles.button} ${homeStyles.signIn}`}>
            Sign In
          </Link>
        </div>

        <div className={homeStyles.rightSide}>
          <div className={homeStyles.imageContainer}>
            <Link to="/signup">
              <img
                className={homeStyles.image}
                src={signupImage}
                alt="Sign Up"
              />
            </Link>
          </div>
          <Link to="/signup" className={`${buttonStyles.button} ${homeStyles.signUp}`}>
            Sign Up
          </Link>
        </div>
      </div>
      <div className={homeStyles.employerSection}>
        <h2>Are you an Employer?</h2>
        <p>If you are an employer looking to hire workers, sign up now to post your job openings and find the perfect candidates!</p>
        <Link to="/employerpage" className={`${buttonStyles.button} ${homeStyles.employerButton}`}>
          Post a Job
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
