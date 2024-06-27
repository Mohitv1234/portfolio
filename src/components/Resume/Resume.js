import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/mohit22.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Full Stack developer [Flippy7]"
              date="April 2022 - May 2023"
              content={[
                "Learned and experiment with MongoDb, Express.js, React.js, Node.js, Next.js, MySql, Java, Laravel, Flask, Django, Aws cloud services like App Sync, RDS, GraphQl and DynamoDb.",
                "Build E-Commerce application like Flipkart, Amazon. that application is multi panel application like Super Admin, Admin, Supplyer, User.",
              ]}
            />
            <Resumecontent
              title="Back-End developer [Fuddo]"
              date="June 2023 - Dec 2023"
              content={[
                "Learned and experiment with Aws cloud services like Typescript, Nodejs, Graphql, as a backend technology and React, RelayJs, Material UI and Next.js as a frontend technology.",
                "Build Full Online Learning Plateform which has servel feature like live streaming with real time chat, uploading courses, videos, track watch time etc.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Technical Lead [GirlWhoCode Bhopal]"
              date="March 2022 - present"
              content={[
                "As a Part of Community, we arrange lots of event,Like HackerRank contest,ReactJS Live session and lots of other stuff.",
              ]}
            />
            <Resumecontent
              title="Cuvvet Learn Student Ambassador"
              date="Sep 2019 - March 2021"
              content={[
                "Under the Microsoft Learn Student Ambassadors programme, I started my cloud journey and learn basics of azure and i hosted several events Like hosting github session, Benifits of open source programme and and its community and much more.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering [S.I.R.T.] "
              date="2020 - 2024"
              content={[
                `CGPA: 8.5/10 `,
                "I was complete my bachelor degree fron Sagar Institute of Research Technology and science.",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Win first prize in Quiz Compitition at District Lavel.`,
                `2nd rank in college Web Design competition. and win some price money.`,
                `1st rank Web development in flippy7 and win Bug Hunter title`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
