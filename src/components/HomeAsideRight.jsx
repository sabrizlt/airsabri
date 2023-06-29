import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function HomeAsideLeft() {
  const [activeLink, setActiveLink] = useState(""); // Stato per tenere traccia del link attivo

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };

  return (
    <>
      <div className="d-none d-lg-block col-lg-3">
        <ListGroup
          defaultActiveKey="#link1"
          style={{ width: "14rem", position: "sticky", top: 80 }}
          className="m-5 rounded-0 list-home"
          border="light"
        >
          <ListGroup.Item className="text-center fw-bold">
            SEGUICI SU
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="#link1"
            active={activeLink === "#link1"}
            onClick={() => handleLinkClick("#link1")}
            className={activeLink === "#link1" ? "instagram-active" : ""}
            style={{ border: "none" }}
          >
            <Link
              to={"https://www.instagram.com/sabri.zlt/"}
              style={{ textDecoration: "none" }}
              className="text-list"
            >
              <BsInstagram /> Instagram
            </Link>
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="#link2"
            active={activeLink === "#link2"}
            onClick={() => handleLinkClick("#link2")}
            style={{
              backgroundColor: activeLink === "#link2" ? "#3B5998" : "",
              border: "none",
            }}
          >
            <Link
              to={"https://www.facebook.com/sabri.zaltini/"}
              style={{ textDecoration: "none" }}
              className="text-list"
            >
              <BsFacebook /> Facebook
            </Link>
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="#link3"
            active={activeLink === "#link3"}
            onClick={() => handleLinkClick("#link3")}
            style={{
              backgroundColor: activeLink === "#link3" ? "#171515" : "",
              border: "none",
            }}
          >
            <Link
              to={"https://github.com/sabrizlt"}
              style={{ textDecoration: "none" }}
              className="text-list"
            >
              <BsGithub /> Github
            </Link>
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="#link4"
            active={activeLink === "#link4"}
            onClick={() => handleLinkClick("#link4")}
            style={{
              backgroundColor: activeLink === "#link4" ? "#0E76A8" : "",
              border: "none",
            }}
          >
            <Link
              to={"https://www.linkedin.com/in/sabri-zaltni-704310270/"}
              style={{ textDecoration: "none" }}
              className="text-list"
            >
              <BsLinkedin /> Linkedin
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="text-center fw-bold">
            CONTATTACI
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
            Whatsapp
          </ListGroup.Item>
          <ListGroup.Item action href="#link3">
            Email
          </ListGroup.Item>
          <ListGroup.Item action href="#link4">
            Telefono
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default HomeAsideLeft;
