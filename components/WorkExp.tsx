import React from "react";

const ExpPhysical = () => {
  return (
    <div className="workExp__block">
      <div className="workExp__companyIcon">
        <img alt="" width="100%" height="100%" src="/image/physical_icon.png" />
      </div>
      <div className="workExp__jobDetail">
        <h2 className="workExp__jobTitle">Web Developer - PHYSICAL 舒適堡 </h2>
        <p className="workExp__period"> September 2019 - September 2020 </p>
      </div>
      <ul className="workExp__detailList">
        <li>
          <span>
            Deploy a gitLab server.
            <b> ( Linux / Docker / GitLab ) </b>
          </span>{" "}
        </li>
        <li>
          <span>
            Develop a mobile app for staff to change customer's photo.
            <b> ( React Native / Express.js / Docker ) </b>
          </span>{" "}
        </li>
        <li>
          <span>
            Develop a CMS system for control system data(e.g. inventory,
            invoice, approval). ( Vue / Express.js / Sql Server / Docker )
          </span>{" "}
        </li>
      </ul>
    </div>
  );
};

const ExpSingTao = () => {
  return (
    <div className="workExp__block">
      <div className="workExp__jobDetail">
        <h2 className="workExp__jobTitle">
          Software Engineer - Sing Tao News Corporation Limited
        </h2>
        <p className="workExp__period"> July 2022 - Present </p>
      </div>
      <ul className="workExp__detailList">
        <li>
          <span>
            Development Sing Tao headline app, android/ios/web(kotlin, swift,
            js)
          </span>
        </li>
        <li>
          <span>Maintain mobile backend (java spring boot)</span>
        </li>
        <li>
          <span>CI/CD for the mobile app</span>
        </li>
        <li>
          <span>Code review with other colleague</span>
        </li>
      </ul>
    </div>
  );
};

const ExpPCCWS = () => {
  return (
    <div className="workExp__block">
      <div className="workExp__jobDetail">
        <h2 className="workExp__jobTitle">
          Analyst programmer - PCCW Solutions
        </h2>
        <p className="workExp__period"> October 2021 - July 2022 </p>
      </div>
      <ul className="workExp__detailList">
        <li>
          <span>Development HK CSD internal Mobile App (Kotlin android)</span>
        </li>
        <li>
          <span>Development HK HA Mobile app(React Native)</span>
        </li>
        <li>
          <span>Development MTR Mobile app(Web app, using micro frontend)</span>
        </li>
      </ul>
    </div>
  );
};

const ExpSB = () => {
  return (
    <div className="workExp__block">
      {/* <div className="workExp__companyIcon">
        <img
          alt=""
          width="100%"
          height="100%"
          src="/public/image/physical_icon.png"
        />
      </div> */}
      <div className="workExp__jobDetail">
        <h2 className="workExp__jobTitle">
          Web Developer - Success Base engineering ltd
        </h2>
        <p className="workExp__period"> October 2020 - October 2021 </p>
      </div>
      <ul className="workExp__detailList">
        <li>
          <span>
            using React Native to build a multi-platform(web, ios, android)
            <b> ( React Native / Expo / React Native Web ) </b>
          </span>{" "}
        </li>
        <li>
          <span>
            using Three.js for 3D interior design <b> ( Three js ) </b>
          </span>{" "}
        </li>
        <li>
          <span>develop RWD UI and 3D scenes follow Designer's design </span>{" "}
        </li>
        <li>
          <span>
            Analyze project structure improve 3D rendering from 2x fps to 5x fps
          </span>{" "}
        </li>
      </ul>
    </div>
  );
};

const ExpGaei = () => {
  return (
    <div className="workExp__block">
      <div className="workExp__companyIcon">
        <img alt="" width="100%" height="100%" src="/image/gac_icon.png" />
      </div>
      <div className="workExp__jobDetail">
        <h2 className="workExp__jobTitle">
          Front-End Trainee(Internship) - GAC R&D CENTER 广汽研究院{" "}
        </h2>
        <p className="workExp__period"> July 2019 - August 2019 </p>
      </div>
      <ul className="workExp__detailList">
        <li>
          Develop application's front-end with designed wireframe.(Vue / Vuex /
          Element / NodeJs)
        </li>
        <li>
          fix bugs on existing applications (Vue / Vuex / Spring Boot / NodeJs /
          Java){" "}
        </li>
        <li>
          Cooperate with third-party vendor, connect the api between FrontEnd
          and BackEnd.
        </li>
      </ul>
    </div>
  );
};

export default function WorkExp() {
  return (
    <>
      <div className="margin1">
        <h1 className="title">Work Experience</h1>
        <div className="workExp__flex padding1">
          <ExpSingTao />
          <ExpPCCWS />
          <ExpSB />
          <ExpPhysical />
          <ExpGaei />
        </div>
      </div>
    </>
  );
}
