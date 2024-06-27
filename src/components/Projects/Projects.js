import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eCom from "../../Assets/Projects/E-com.png";
import Eyemeet from "../../Assets/Projects/Eyemeet.png";
import whatsapp from "../../Assets/Projects/whatsapp.avif";
import mahiAcademy from "../../Assets/Projects/mahiAcadmy.png";
import form from "../../Assets/Projects/form.png";
import edugo from "../../Assets/Projects/edogo1.jpg";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsapp}
              isBlog={false}
              title="WhatGpt"
              description="This project aims to develop a WhatsApp chatbot designed to mimic the conversational abilities of ChatGPT, leveraging natural language processing techniques. Users interact with the bot through WhatsApp, where it responds to text queries in a conversational manner, providing relevant and coherent answers similar to human-like conversations. The bot utilizes machine learning models and a vast dataset to generate responses, ensuring a seamless and engaging user experience."
              link="https://github.com/amwebservces/what_bot"
              liveLink="https://wa.me/7000269330"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mahiAcademy}
              isBlog={false}
              title="Mahi Academy"
              description="This project involves the development of a comprehensive School Management System (SMS) designed to streamline administrative tasks and enhance communication within educational institutions. The system integrates features such as student enrollment management, attendance tracking, grade management, and communication tools for teachers, students, and parents."
              link="https://github.com/Amit1332/FrontendMajorRepoPrep"
              liveLink="https://www.mahiacademy.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Flippy7"
              description="It is a basic e-commerce site which build in MERN tech stack. It has a features like login, signup as a part of authentication. Apart from that user add product in cart, modify quantity and also remove poduct in cart. It is a basic e-comerce site which build in pure html, css, reactjs and redux. You can watch live app in below button."
              link="https://github.com/Mohitv1234/FlippySupplierpanel"
              liveLink="https://github.com/Mohitv1234/FlippySupplierpanel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edugo}
              isBlog={false}
              title="Edugo"
              description="Developing a mobile app for efficient school management, focusing on attendance tracking, grade management, and communication. The app aims to streamline operations, enhance transparency, and provide real-time updates for administrators, teachers, parents, and students. Designed for iOS and Android, ensuring accessibility and user-friendly experience across platforms."
              link="https://github.com/Mohitv1234/EdugoNative"
              liveLink="https://github.com/Mohitv1234/EdugoAdmin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eyemeet}
              isBlog={false}
              title="EyeMeet"
              description=" Features include video conferencing, screen sharing, and chat functionalities. The website aims to provide a user-friendly interface, accessibility across devices, and robust security measures to ensure productive and secure online meetings"
              link="https://github.com/Mohitv1234/eyemeet"
              liveLink="https://github.com/Mohitv1234/eyemeet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={form}
              isBlog={false}
              title="FORM"
              description="Developing a website focused on sophisticated animations and seamless transitions to enhance user experience. The project aims to showcase creativity through interactive elements, smooth page transitions, and visually engaging design. Utilizing CSS animations, JavaScript libraries, and modern web technologies to create a dynamic and engaging browsing experience."
              link="https://github.com/Mohitv1234/Form"
              liveLink="https://mohitv1234.github.io/Form/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
