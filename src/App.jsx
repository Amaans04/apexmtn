import React from "react";
import "./App.css";
import bg1 from "./assets/b3.png";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const App = () => {
  return (
    <div className="main">
      <div className='logo'>
        <img src={bg1} alt="" />
        <h2>TheApex | Dev</h2>
      </div>
      <div className="content">
        <h1>Website is</h1>
        <h1>UNDER MAINTENANCE</h1>
        <p>We are currently working on the website to bring you the best experience.If you need assistance, feel free to contact us below.</p>
        <h2>Contact Us :</h2>
        <div className="cntct">
          {/* <a href="https://www.google.com">Contact Us</a> */}
          <a className="call" href="tel:+91-9019850972">
            <IoMdCall />
          </a>
          <a className="whatsapp" href="https://wa.me/9019850972">
            <FaWhatsapp />
          </a>
          <a className="mail" href="mailto:amaansaify64@email.com">
            <MdOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
