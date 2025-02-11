import React from 'react';
import { Link } from 'react-router-dom';
import homeStyles from '../styles/HomePage.module.css';
import buttonStyles from '../styles/Button.module.css';

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
            <img
              className={homeStyles.image}
              src=""
              alt="Sign In"
            />
          </div>
          <Link to="/signin" className={`${buttonStyles.button} ${homeStyles.signIn}`}>
            Sign In
          </Link>
        </div>

        <div className={homeStyles.rightSide}>
          <div className={homeStyles.imageContainer}>
            <img
              className={homeStyles.image}
              src="" 
              alt="Sign Up"
            />
          </div>
          <Link to="/signup" className={`${buttonStyles.button} ${homeStyles.signUp}`}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
