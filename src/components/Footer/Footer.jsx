import React from "react";
import "./Footer.scss";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
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
            <a href="#">
              <MailOutlineOutlinedIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="#">
              <GitHubIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="#">
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
