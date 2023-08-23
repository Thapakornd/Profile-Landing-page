import React from "react";
import "./Footer.scss";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="logo">
        <h1>
          Thapakorn.<span>GUS</span>
        </h1>
        <h4>
          Feel free to contact me by link below and I will reply to you as soon
          as possible
        </h4>
      </div>
      <div className="link">
        <ul>
          <li>
            <a href="mailto:thapakornmeethan@gmail.com">
              <MailOutlineOutlinedIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Thapakornd" target="noreferrer">
              <GitHubIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/glaz__130/" target="noreferrer">
              <InstagramIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/thapakorn-meethan-290524227/" target="noreferrer">
              <LinkedInIcon fontSize="large" />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>No Copyright 2023 Thapakorn.Meethan.GUS.@PORTFOLIO</p>
        <span>Created by Thapakorn.GUS</span>
      </div>
    </div>
  );
};

export default Footer;
