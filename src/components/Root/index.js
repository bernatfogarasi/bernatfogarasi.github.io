import styled from "styled-components";
import React, { useEffect } from "react";
import Contact from "../Contact";
// import Network from "../Network";
// import Slide from "../Slide";
// import SlideContent from "../Slide/Content";
import BrowserPopup from "../BrowserPopup";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "../Home";
import Project from "../Project";
import About from "../About";
import Resume from "../Resume";
import Skills from "../Skills";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: white;
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

const Root = () => {
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
      <Home />
      <Skills />
      <Project
        title="Algorithm Visualizer"
        problem="Sorting and pathfinding algorithms are hard to understand."
        solution="I have built a sorting and pathfinding visualizer website and
              successfully implemented 30+ algorithms. The visualizations are highly customizable. I also added controls
              for the user to pause or play animations backwards."
      />
      {/*<Project
        title="Mingle"
        problem="Most of the large social media sites are biased and it is a pain to go through them individually."
        solution="A media website that allows the user to view posts from multiple
              social media platforms."
          />*/}
      <Resume />
      <About />
      <Contact />
    </Wrapper>
  );
};

export default Root;
