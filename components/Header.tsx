import React from "react";
import { AiFillPhone, AiTwotoneMail, AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__flex">
          <div className="header__info">
            <h1>Ben Cheng</h1>
            <br />
            <h3>FullStack Developer</h3>
          </div>
          <div className="header__infoDetail">
            <p>
              <AiFillPhone />
              Phone:
              <b>
                <u>+852 6801 7455</u>
              </b>
            </p>
            <p>
              <AiTwotoneMail />
              Email:{" "}
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=ben39053372@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ben39053372@gmail.com
              </a>
            </p>
            <p>
              <AiFillGithub />
              Github:{" "}
              <a
                href="https://github.com/ben39053372"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ben39053372
              </a>
            </p>
            <p>
              <FaLinkedin />
              LinkedIn: {""}
              <a href="https://www.linkedin.com/in/ben-cheng-5656a11b3/">
                https://www.linkedin.com/in/ben-cheng-5656a11b3/
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
