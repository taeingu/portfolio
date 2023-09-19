import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/tae-in-gu-43a870207/" target="_blank">
      <div>
        <BsLinkedin />
      </div>
      </a>
      <a href="https://github.com/taeingu" target="_blank">
      <div>
        <BsGithub />
      </div>
      </a>
      <a href="https://www.instagram.com/nineten1999/" target="_blank">
      <div>
        <BsInstagram />
      </div>
      </a>
    </div>
  );
};

export default SocialMedia;
