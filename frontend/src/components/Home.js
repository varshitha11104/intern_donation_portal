import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the Donation Portal</h1>
        <p>Empowering Interns to Make an Impact</p>
        <div className="button-group">
          <Link to="/login" className="home-button">Login</Link>
          <Link to="/signup" className="home-button">Signup</Link>
        </div>
      </div>
      <div className="home-image">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/927/515/original/love-charity-or-giving-donation-via-volunteer-team-worked-together-to-help-and-collect-donations-for-poster-or-banner-in-flat-design-illustration-vector.jpg"
          alt="Donation"
        />
      </div>
    </div>
  );
};

export default HomePage;
