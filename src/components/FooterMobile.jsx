import React, { useState } from "react";
import { MdAirplaneTicket, MdMenuBook } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { BiSolidDiscount } from "react-icons/bi";
import logo from "../IMAGE/logo.png";
import { toast } from "react-toastify";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { RiChatFollowUpFill } from "react-icons/ri";
import Dropdown from "react-bootstrap/Dropdown";

const Footer = () => {
  const handleCodeClick = () => {
    toast.info("Il tuo codice sconto è: AIRSABRI10");
  };

  const handleTratteClick = () => {
    window.location.href = "/tratte";
  };
  const handleTratteClickHome = () => {
    window.location.href = "/home";
  };
  const handleTratteClickRivista = () => {
    window.location.href = "/Rivista";
  };
  const handleTratteClickInstagram = () => {
    window.location.href = "https://www.instagram.com/sabri.zlt/";
  };
  const handleTratteClickFacebook = () => {
    window.location.href = "https://www.facebook.com/sabri.zaltini/";
  };
  const handleTratteClickGithub = () => {
    window.location.href = "https://github.com/sabrizlt";
  };
  const handleTratteClickLinkedin = () => {
    window.location.href =
      "https://www.linkedin.com/in/sabri-zaltni-704310270/";
  };

  return (
    <>
      <footer className="footer-mobile fixed-bottom bg-primary">
        <div className="d-flex justify-content-center align-items-center">
          <MdAirplaneTicket
            className="icon mx-3 text-light"
            onClick={handleTratteClick}
          />

          <Dropdown>
            <Dropdown.Toggle
            variant=""
            >
              <RiChatFollowUpFill className="icon mx-3 text-light" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="text-center">SEGUICI SU</Dropdown.Item>
              <Dropdown.Item
                className="text-primary"
                href="#/action-1"
                onClick={handleTratteClickInstagram}
              >
                <BsInstagram className="mx-2" />
                Instagram
              </Dropdown.Item>
              <Dropdown.Item
                className="text-primary"
                href="#/action-2"
                onClick={handleTratteClickFacebook}
              >
                <BsFacebook className="mx-2" />
                Facebook
              </Dropdown.Item>
              <Dropdown.Item
                className="text-primary"
                href="#/action-3"
                onClick={handleTratteClickGithub}
              >
                <BsGithub className="mx-2" />
                Github
              </Dropdown.Item>
              <Dropdown.Item
                className="text-primary"
                href="#/action-3"
                onClick={handleTratteClickLinkedin}
              >
                <BsLinkedin className="mx-2" />
                Linkedin
              </Dropdown.Item>
              <Dropdown.Item className="text-center">CONTATTACI</Dropdown.Item>
              <Dropdown.Item>WHATSAPP</Dropdown.Item>
              <Dropdown.Item>EMAIL</Dropdown.Item>
              <Dropdown.Item>TELEFONO</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <img
            src={logo}
            alt=""
            style={{ width: "80px" }}
            onClick={handleTratteClickHome}
          />
          <MdMenuBook
            className="icon mx-3 text-light"
            onClick={handleTratteClickRivista}
          />
          <BiSolidDiscount
            className="icon mx-3 text-light"
            onClick={handleCodeClick}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
