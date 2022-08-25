import React from "react";
import { socials } from "./resources";
import logocompleto from "../../images/marchio_bianco.png";
import "./index.scss";

const Footer = () => (
  <footer className="footer flex flex-col md:flex-row items-center justify-between flex-wrap w-screen p-3 lg:px-36 xl:px-42 py-10">
    <div className="footer__section">
      <img
        src={logocompleto}
        alt="concorso torrisi logo"
        className={"footer__section__logo"}
      />
      <address className="mt-4">San Giovanni la Punta, Catania</address>
    </div>
    <div className="footer__section flex justify-between">
      {socials.map(({ src, href }, index) => (
        <a href={href} key={src.split(".")[0]}>
          <img
            src={src}
            alt={href.slice(12, 20)}
            className={"footer__section__social " + (index !== 0 ? "ml-3" : "")}
          />
        </a>
      ))}
    </div>
    <div className="footer__section mt-20 md:mt-0">
      Developed by
      <a href="https://www.linkedin.com/in/mirko-torrisi/"> Mirko Torrisi</a>
    </div>
  </footer>
);

export default Footer;
