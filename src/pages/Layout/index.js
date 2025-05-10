import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./index.css";
import SchoolLogo from "./../../assets/images/SchoolLogo.png";
import SchoolNameWhite from "./../../assets/images/SchoolName_white.png";
import SchoolName from "./../../assets/images/SchoolName.png";
import { Divider, Drawer, Space } from "antd";

//import icons
import {
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
  CopyrightOutlined,
  MenuOutlined,
  CloseOutlined,
  PhoneFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

// import footer images

import NotificationBanner from "../../components/Notifications/NotificationBanner";

function MainLayout() {
  const [showMenuItem, setShowMenuItem] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (value) => {
    setTimeout(() => {
      setShowMenuItem(value);
    }, 200);
  };

  return (
    <div className="App">
      <header className={`App-header ${isAtTop ? "at-top" : "not-at-top"}`}>
        <div className="img-container">
          <img src={SchoolLogo} className="img-object-1"></img>
          <img src={SchoolName} className="img-object-2"></img>
        </div>
        <nav>
          {
            <>
              {!showMenuItem ? (
                <MenuOutlined
                  className="navbar-menu"
                  onClick={handleMenuClick.bind(this, true)}
                />
              ) : (
                <CloseOutlined
                  className="navbar-menu"
                  onClick={handleMenuClick.bind(this, false)}
                />
              )}
              {showMenuItem && (
                <Drawer
                  title="Menu"
                  placement="right"
                  onClose={handleMenuClick.bind(this, false)}
                  open={showMenuItem}
                >
                  <ul className="link-container-media">
                    <li>
                      <Link to="/" onClick={handleMenuClick.bind(this, false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/academics"
                        onClick={handleMenuClick.bind(this, false)}
                      >
                        Academics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/activities"
                        onClick={handleMenuClick.bind(this, false)}
                      >
                        Activities
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery"
                        onClick={handleMenuClick.bind(this, false)}
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/aboutus"
                        onClick={handleMenuClick.bind(this, false)}
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </Drawer>
              )}
            </>
          }
          <ul className="link-container">
            <li className="nav-hover-animation">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-hover-animation">
              <Link to="/academics">Academics</Link>
            </li>
            <li className="nav-hover-animation">
              <Link to="/activities">Activities</Link>
            </li>
            <li className="nav-hover-animation">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="nav-hover-animation">
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <NotificationBanner />
        <Outlet />
      </main>
      <footer className="App-footer">
        <div className="social-container">
          <div className="section-one">
            <div className="img-container img-container_footer">
              <img src={SchoolLogo} className="img-object-1"></img>
              <img src={SchoolName} className="img-object-2"></img>
            </div>
          </div>
          <Divider orientation="vertical"></Divider>
          <div className="section-two">
            <h3>
              Contact Details
              <PhoneFilled style={{ paddingLeft: "2px" }} />
            </h3>
            <p>
              <strong>Campus Address :</strong> Sadabahar chowk, Namkum Ranchi,
              Jharkhand-834010
            </p>
            <p>
              Reach out to us on <b>+91-9334158100</b>
            </p>
            <strong>Follow Us on </strong>
            <div className="media-container">
              <WhatsAppOutlined
                style={{ color: "#25D366" }}
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=919334158100",
                    "_blank"
                  )
                }
              />
              <FacebookOutlined
                style={{ color: "#1877F2" }}
                onClick={() =>
                  window.open("https://m.facebook.com/ckgs2003/", "_blank")
                }
              />
            </div>
          </div>
        </div>
        <div className="copyright-container">
          Copyright <CopyrightOutlined /> 2025. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
