import React from "react";

export default function Project() {
  return (
    <div className="margin1">
      <h1 className="title">Personal Project</h1>
      <div className="project">
        <div style={{ width: "200px" }}>
          <p>
            <b>
              <a href="https://insurance.heshecar.com/customers/home">
                Online Car Insurance and CMS(Deprecated by client)
              </a>
            </b>
          </p>
          <ul>
            <li>
              <a href="https://github.com/ben39053372/Online-Insurance">
                GitHub
              </a>
            </li>
            <li>This is a online platform for car owner to buy a insurance.</li>
            <li>
              used:{" "}
              <b>React, Redux, Axios, Docker, MaterialUi, Google-Recaptcha</b>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <b>
              <a href="https://ben39053372.netlify.app/">Resume</a>
            </b>
          </p>
          <ul>
            <li>
              <a href="https://github.com/ben39053372/my-resume">GitHub</a>
            </li>
            <li>A simple website using HTML and CSS</li>
            <li>RWD for mobile and print with A4 size.</li>
            <li>
              used: <b>React(Layout), pure Html and CSS, Netlify(for deploy)</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
