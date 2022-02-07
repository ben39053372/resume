import React from "react";

const FrontEnd = () => (
  <div>
    <h1>Front End</h1>
    <ul>
      <li>React / React Native (redux, useSWR, nextJS, react-router-dom, Material-UI)</li>
      <li>kotlin / java (android)</li>
      <li>Vue(Nuxt, vuex, vux, ElementUI)</li>
      <li>Flutter</li>
    </ul>
  </div>
);

const BackEnd = () => (
  <div>
    <h1>Back End</h1>
    <ul>
      <li>node.js (express.js, nest.js)</li>
      <li>java / kotlin(Spring Boot)</li>
      <li>golang(Gin, gochi)</li>
      <li>python(Flask)</li>
      <li>Database(MongoDB, PostgreSql, Redis, MSSQL, MySql, OracleDB, MariaDB)</li>
    </ul>
  </div>
);

const Tools = () => (
  <div>
    <h1>Tools</h1>
    <ul>
      <li>Docker(compose) </li>
      <li>VSCode</li>
      <li>IDEA(Android Studio)</li>
    </ul>
  </div>
);

export default function SkillSet() {
  return (
    <div className="margin1">
      <h1 className="title">Skills</h1>
      <div className="flex">
        <FrontEnd />
        <BackEnd />
        <Tools />
      </div>
    </div>
  );
}
