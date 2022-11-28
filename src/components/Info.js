import React from 'react';
import Profile from "../images/profile_pic.jpg";
import About from './About';
import Interests from "./Interests";

const Info = () => {
  return (
    <main>
      <img src={Profile} alt="My Profile" />
      <h1>Ikechukwu Agbarakwe</h1>
      <h4>Developer / QA Engineer</h4>
      <a href="https://github.com/reywald">No website</a>
      <button>Email</button>

      <About />

      <Interests />
    </main>
  );
};

export default Info;