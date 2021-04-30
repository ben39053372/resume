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
            Deploy a gitLab server using gitLab docker image for version
            control. Migrate existing project from TFVC to git. Improve the
            efficiency of collaborative development.
            <b> ( Linux / Docker / GitLab ) </b>
          </span>{" "}
        </li>
        <li>
          <span>
            Develop some little tools for import a bulk data. Always need to
            entry a lot of data to database, to reach the business logic. The
            tools can save the time of manual input.{" "}
            <b> ( Python / Sql Server / Docker ) </b>
          </span>{" "}
        </li>
        <li>
          <span>
            Develop a mobile app for staff to change customer's photo. This app
            can help staff quickly to change customer photo, and can give top
            management to approval the photo changes.The old way is need to scan
            hard copy to computer. Some business rely on customer photo, so this
            app can help some much.{" "}
            <b> ( React Native / Express.js / Docker ) </b>
          </span>{" "}
        </li>
        <li>
          <span>
            Develop a new CMS system for control system data(e.g. inventory,
            invoice, approval). ( Vue / Express.js / Sql Server / Docker )
          </span>{" "}
        </li>
        <li>
          <span>Maintain existing applications ( Sql Server / VB.net )</span>
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
        <p className="workExp__period"> October 2020 - Present </p>
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
            Analyze project structure improve 3D rendering fps from 2x to 5x
          </span>{" "}
        </li>
        <li>
          <span>Analyze React coding to improve web performance</span>{" "}
        </li>
        <li>
          <span>giving suggestion for more good coding practice</span>
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
          Develop application's front-end with designed wireframe. My first
          company project. The vendor maintain web project, but do not include
          mobile wechat page, so manager assign this task for me. Manager
          feedback is I can stand-alone development quickly.(Vue / Vuex /
          Element / NodeJs)
        </li>
        <li>
          fix bugs on existing applications (Vue / Vuex / Spring Boot / NodeJs /
          Java){" "}
        </li>
        <li>
          Cooperate with third-party vendor, connect the api between FrontEnd
          and BackEnd. I can learn so much with vendor and learn how to
          communicate with backend developer.
        </li>
        <li>
          Use their gitlab server for version control. Learn how to use git with
          a company team.
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
          <ExpSB />
          <ExpPhysical />
          <ExpGaei />
        </div>
      </div>
    </>
  );
}
