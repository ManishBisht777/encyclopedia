import React from "react";
import "./footer.css";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineLink,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <h4>Copyrite 2022 </h4>
      <h3>
        Author <a href="/"> Manish Bisht</a>
      </h3>
      <div className="socials">
        <li>
          <a href="/">
            <AiOutlineTwitter />
          </a>
        </li>
        <li>
          <a href="/">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="/">
            <AiOutlineLink />
          </a>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
