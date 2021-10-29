import styled from "styled-components";
import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import Network from "../Network";
import ProjectScene from "../ProjectScene";
import Slide from "../Slide";
import SlideContent from "../SlideContent";
import SlideTitle from "../SlideTitle";
import resume from "./../../assets/images/resume.png";
import BrowserPopup from "../BrowserPopup";
// import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { InView } from "react-intersection-observer";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: white;
`;

const Greetings = styled.div`
  font-family: SFMono;
  color: black;
`;

const Name = styled.div`
  width: fit-content;
  font-family: CalibreSemibold;
  letter-spacing: -0.03em;
  font-size: 55pt;
  margin-top: 25px;
  margin-left: -5px;
  line-height: 0.7em;
  :after {
    content: "";
    height: 100px;
    width: 100px;
    background: white;
  }
`;

const Motto = styled.div`
  width: fit-content;
  font-family: CalibreSemibold;
  letter-spacing: -0.03em;
  font-size: 55pt;
  color: #6d6d6d;
  margin-left: -5px;
`;

const Category = styled.div`
  display: flex;
  position: fixed;
  top: 100%;
  left: 35px;
  width: fit-content;
  font-size: 20pt;
  transform-origin: 0% 0%;
  transform: rotateZ(-90deg);
  align-items: center;
  font-family: SFMono;
`;

const CategoryLine = styled.hr`
  width: 100px;
  border: 1px solid black;
  height: 0px;
  margin-right: 30px;
`;

const Description = styled.div`
  font-family: Calibre;
  font-size: 20px;
  text-align: justify;
`;

const ProjectDescription = styled(Description)`
  width: 50%;
`;

const Paragraph = styled.div`
  margin: 20px 0;
`;

const List = styled.ul`
  columns: 2;
`;
// const ProjectSceneLeft = styled(ProjectScene)``;

// const ProjectSceneRight = styled(ProjectScene)``;

// const Resume = styled.iframe`
//   width: 100%;
//   height: 100%;
//   border-radius: 30px;
// `;

const Resume = styled.img`
  height: 100%;
  border: 1px solid;
  cursor: pointer;
  :hover {
  }
`;

const Content = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Wrapper>
      <BrowserPopup></BrowserPopup>
      <Category>
        <CategoryLine />
        Projects
      </Category>
      <Slide>
        <SlideContent>
          <Greetings
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="200"
          >
            Hi, my name is
          </Greetings>
          <Name
            data-aos="zoom-in"
            data-aos-delay="1200"
            data-aos-duration="200"
          >
            Bernat Fogarasi.
          </Name>
          <Motto
            data-aos="zoom-in"
            data-aos-delay="1300"
            data-aos-duration="200"
          >
            I build things for the{" "}
            <span style={{ color: "#ff6500", WebkitTextStroke: "0px black" }}>
              web.
            </span>
          </Motto>
        </SlideContent>
      </Slide>
      <Slide>
        <SlideTitle>Network of skills</SlideTitle>
        <InView>
          {({ inView, ref, entry }) => (
            <SlideContent style={{ heigth: "100%" }} innerRef={ref}>
              {inView && <Network />}
            </SlideContent>
          )}
        </InView>
      </Slide>
      <Slide>
        <ProjectScene side="right" src="https://bernatfogarasi.github.io" />
        <SlideTitle>AlgoVisualizer</SlideTitle>
        <SlideContent>
          <ProjectDescription>
            <Paragraph>
              I have built a sorting and pathfinding visualizer website and
              successfully implemented 30+ algorithms.
            </Paragraph>
            <Paragraph>
              The visualizations are highly customizable. I also added controls
              for the user i.e. pausing, playing backwards.
            </Paragraph>
            <Paragraph></Paragraph>
          </ProjectDescription>
        </SlideContent>
      </Slide>
      <Slide>
        <SlideTitle>Resume</SlideTitle>
        <SlideContent>
          <Resume src={resume} alt="Not found" />
        </SlideContent>
      </Slide>
      <Slide>
        <SlideTitle>About</SlideTitle>
        <SlideContent>
          <Description>
            <Paragraph>About description</Paragraph>
          </Description>
        </SlideContent>
      </Slide>
      <Slide>
        <SlideTitle>Contact</SlideTitle>
        <SlideContent>
          <ContactForm />
        </SlideContent>
      </Slide>
    </Wrapper>
  );
};

export default Content;
