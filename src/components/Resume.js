import React, { Component } from "react";
import {
  SiPhp,
  SiLaravel,
  SiPrestashop,
  SiBigcommerce,
  SiDynamics365,
  SiSap,
  SiSalesforce,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiSonarqube,
  SiPostman,
  SiJira,
  SiMongodb,
  SiExpress,
  SiReact
} from 'react-icons/si'
import { FaNodeJs, FaGitSquare, FaGithub } from 'react-icons/fa'

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
    <>
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Estudios</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item" key={item.UniversityName}>
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experiencia</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item" key={item.CompanyName}>
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">{item.specialization}</p>
                      <p className="achievements">{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Soft Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li key={item.skillname}>
                        <span
                          className="bar-expand"
                          style={{ width: `${item.level}%` }}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
      <div className="three columns header-col">
            <h1>
              <span>Hard Skills</span>
            </h1>
          </div>
          <div className="twelve columns">
            <ul className="hard-list">
              {/* Main stack */}
              <li className="hard-li" title="PHP"><SiPhp style={{fontSize: "45px"}} aria-label="PHP"/></li>
              <li className="hard-li" title="Laravel"><SiLaravel style={{fontSize: "45px"}} aria-label="Laravel"/></li>
              <li className="hard-li" title="PrestaShop"><SiPrestashop style={{fontSize: "45px"}} aria-label="PrestaShop"/></li>
              <li className="hard-li" title="BigCommerce"><SiBigcommerce style={{fontSize: "45px"}} aria-label="BigCommerce"/></li>
              <li className="hard-li" title="Business Central"><SiDynamics365 style={{fontSize: "45px"}} aria-label="Business Central"/></li>
              <li className="hard-li" title="SAP"><SiSap style={{fontSize: "45px"}} aria-label="SAP"/></li>
              <li className="hard-li" title="Salesforce"><SiSalesforce style={{fontSize: "45px"}} aria-label="Salesforce"/></li>
              <li className="hard-li" title="Node.js"><FaNodeJs style={{fontSize: "45px"}} aria-label="Node.js"/></li>
              <li className="hard-li" title="TypeScript"><SiTypescript style={{fontSize: "45px"}} aria-label="TypeScript"/></li>
              <li className="hard-li" title="JavaScript"><SiJavascript style={{fontSize: "45px"}} aria-label="JavaScript"/></li>
              <li className="hard-li" title="MySQL"><SiMysql style={{fontSize: "45px"}} aria-label="MySQL"/></li>
              <li className="hard-li" title="PostgreSQL"><SiPostgresql style={{fontSize: "45px"}} aria-label="PostgreSQL"/></li>
              {/* Tooling and quality */}
              <li className="hard-li" title="Docker"><SiDocker style={{fontSize: "45px"}} aria-label="Docker"/></li>
              <li className="hard-li" title="SonarQube"><SiSonarqube style={{fontSize: "45px"}} aria-label="SonarQube"/></li>
              <li className="hard-li" title="Git"><FaGitSquare style={{fontSize: "45px"}} aria-label="Git"/></li>
              <li className="hard-li" title="GitHub"><FaGithub style={{fontSize: "45px"}} aria-label="GitHub"/></li>
              <li className="hard-li" title="Postman"><SiPostman style={{fontSize: "45px"}} aria-label="Postman"/></li>
              <li className="hard-li" title="Jira"><SiJira style={{fontSize: "45px"}} aria-label="Jira"/></li>
              {/* MERN projects */}
              <li className="hard-li" title="Express"><SiExpress style={{fontSize: "45px"}} aria-label="Express"/></li>
              <li className="hard-li" title="MongoDB"><SiMongodb style={{fontSize: "45px"}} aria-label="MongoDB"/></li>
              <li className="hard-li" title="React"><SiReact style={{fontSize: "45px"}} aria-label="React"/></li>
            </ul>
          </div>
      </div>
      </section>
        </>
    );
  }
}
