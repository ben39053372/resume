import React from "react";

const Basic = () => (
  <div>
    <h1>Basic/Language</h1>
    <ul>
      <li>Git</li>
      <li>Docker</li>
      <li>bash/shell script</li>
      <li>JS(Typescript, ECMAScript)</li>
      <li>SQL</li>
      <li>Go</li>
      <li>Java</li>
      <li>Python</li>
      <li>HTML CSS</li>
      <li>markdown</li>
      <li>C, VB(.net)</li>
    </ul>
  </div>
);

const FrontEnd = () => (
  <div>
    <h1>Front End</h1>
    <ul>
      <li>React(redux, react-router-dom, Material-UI)</li>
      <li>React Native</li>
      <li>Vue(Nuxt, vuex, vux, ElementUI)</li>
      <li>Flutter</li>
      <li>Android Studio</li>
    </ul>
  </div>
);

const BackEnd = () => (
  <div>
    <h1>Back End</h1>
    <ul>
      <li>Express js</li>
      <li>Spring Boot</li>
      <li>Gin</li>
      <li>Flask</li>
      <li>MSSQL</li>
      <li>Mysql/MariaDB</li>
      <li>PostgreSql</li>
      <li>MongoDB</li>
      <li>Redis</li>
      <li>ORM (Sequelize, Hibernate, GORM)</li>
      <li>Prisma</li>
    </ul>
  </div>
);

const Tools = () => (
  <div>
    <h1>Tools</h1>
    <ul>
      <li>VSCode</li>
      <li>OS(Linux, Windows, WSL2)</li>
      <li>Adobe XD</li>
      <li>Portainer(Docker GUI)</li>
      <li>pm2</li>
      <li>Postman</li>
      <li>Hackmd(for notes)</li>
    </ul>
  </div>
);

export default function SkillSet() {
  return (
    <div className="margin1">
      <h1 className="title">Skills</h1>
      <div className="flex">
        <Basic />
        <FrontEnd />
        <BackEnd />
        <Tools />
      </div>
    </div>
  );
}
