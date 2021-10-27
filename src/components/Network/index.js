import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";
import api from "./../../assets/api-m-g.png";
import bootstrap from "./../../assets/bootstrap-t-text2.png";
import d3js from "./../../assets/d3-t-c.png";
import materialui from "./../../assets/materialui-t-c.png";
import mongodb from "./../../assets/mongodb-t-c.png";
import moviepy from "./../../assets/moviepy-f.jpeg";
import nltk from "./../../assets/nltk-c.png";
import opencv from "./../../assets/opencv-t-c.png";
import pandas from "./../../assets/pandas-c.png";
import reactjs from "./../../assets/react-b.jpg";
import threejs from "./../../assets/threejs-t-c.png";
import selenium from "./../../assets/selenium-t-c.png";
import sass from "./../../assets/sass-t-c.png";
import tailwindcss from "./../../assets/tailwindcss-t-c.png";
import ffmpeg from "./../../assets/ffmpeg-t-c.png";
import django from "./../../assets/django-t-c2.png";
import cpp from "./../../assets/cpp-t-f.png";
import javascript from "./../../assets/javascript-c.png";
import python from "./../../assets/python-t-b.png";
import html from "./../../assets/html-t-text.png";
import css from "./../../assets/css-t-text.png";

const nodeGroups = {
  projects: [
    { id: "algovisualizer", name: "AlgoVisualizer" },
    { id: "financialsentiment", name: "Financial Sentiment" },
    { id: "form4analysis", name: "Form 4 Analysis" },
    { id: "socialmerge", name: "SocialMerge" },
    { id: "spotifyrooms", name: "Spotify Rooms" },
    { id: "stocktools", name: "Stock Tools" },
    { id: "youtubeautomation", name: "Youtube Automation" },
  ],
  technologies: [
    { id: "api", name: "API", icon: api },
    { id: "bootstrap", name: "Bootstrap", icon: bootstrap },
    { id: "d3js", name: "D3.js", icon: d3js },
    { id: "materialui", name: "MaterialUI", icon: materialui },
    { id: "moviepy", name: "MoviePy", icon: moviepy },
    { id: "opencv", name: "OpenCV", icon: opencv },
    { id: "pandas", name: "Pandas", icon: pandas },
    { id: "reactjs", name: "React.js", icon: reactjs },
    { id: "threejs", name: "Three.js", icon: threejs },
    { id: "selenium", name: "Selenium", icon: selenium },
    { id: "sass", name: "Sass", icon: sass },
    { id: "tailwindcss", name: "Tailwind CSS", icon: tailwindcss },
    { id: "ffmpeg", name: "FFmpeg", icon: ffmpeg },
    { id: "django", name: "Django", icon: django },
    { id: "mongodb", name: "MongoDB", icon: mongodb },
    { id: "nltk", name: "Natural Language Toolkit", icon: nltk },
  ],
  languages: [
    { id: "cpp", name: "C++", icon: cpp },
    { id: "javascript", name: "Javascript", icon: javascript },
    { id: "python", name: "Python", icon: python },
    { id: "html", name: "HTML", icon: html },
    { id: "css", name: "CSS", icon: css },
  ],
};

const linkGroups = {
  technologiesToProjects: [
    { source: "api", target: "socialmerge" },
    { source: "d3js", target: "socialmerge" },
    { source: "sass", target: "socialmerge" },
    { source: "materialui", target: "socialmerge" },
    { source: "reactjs", target: "socialmerge" },
    { source: "api", target: "spotifyrooms" },
    { source: "tailwindcss", target: "spotifyrooms" },
    { source: "bootstrap", target: "spotifyrooms" },
    { source: "reactjs", target: "spotifyrooms" },
    { source: "api", target: "stocktools" },
    { source: "pandas", target: "stocktools" },
    { source: "django", target: "stocktools" },
    { source: "api", target: "youtubeautomation" },
    { source: "selenium", target: "youtubeautomation" },
    { source: "opencv", target: "youtubeautomation" },
    { source: "ffmpeg", target: "youtubeautomation" },
    { source: "moviepy", target: "youtubeautomation" },
    { source: "threejs", target: "youtubeautomation" },
    { source: "nltk", target: "financialsentiment" },
    { source: "selenium", target: "financialsentiment" },
    { source: "api", target: "financialsentiment" },
    { source: "mongodb", target: "form4analysis" },
    { source: "mongodb", target: "youtubeautomation" },
    { source: "api", target: "form4analysis" },
    { source: "pandas", target: "financialsentiment" },
  ],
  languagesToProjects: [
    { source: "javascript", target: "algovisualizer" },
    { source: "css", target: "algovisualizer" },
    { source: "html", target: "algovisualizer" },
    { source: "javascript", target: "socialmerge" },
    { source: "css", target: "socialmerge" },
    { source: "html", target: "socialmerge" },
    { source: "javascript", target: "spotifyrooms" },
    { source: "css", target: "spotifyrooms" },
    { source: "html", target: "spotifyrooms" },
    { source: "python", target: "stocktools" },
    { source: "css", target: "stocktools" },
    { source: "html", target: "stocktools" },
    { source: "python", target: "youtubeautomation" },
    { source: "python", target: "financialsentiment" },
    { source: "python", target: "form4analysis" },
  ],
  // languagesToTechnologies: [
  //   { source: "Javascript", target: "Bootstrap" },
  //   { source: "Javascript", target: "D3.js" },
  //   { source: "Javascript", target: "MaterialUI" },
  //   { source: "Javascript", target: "React.js" },
  //   { source: "Javascript", target: "Three.js" },
  //   { source: "CSS", target: "Sass" },
  //   { source: "CSS", target: "Tailwind CSS" },
  //   { source: "Python", target: "MoviePy" },
  //   { source: "Python", target: "OpenCV" },
  //   { source: "Python", target: "Pandas" },
  //   { source: "Python", target: "Selenium" },
  //   // { source: "Python", target: "FFmpeg" },
  // ],
};

const createNodes = (nodeGroups) => {
  const nodes = Object.keys(nodeGroups)
    .map((key) =>
      nodeGroups[key].map((item) => {
        return { ...item, group: key };
      })
    )
    .flat(1);
  // console.log(nodes);
  return nodes;
};

const createLinks = (linkGroups) => {
  const links = Object.keys(linkGroups)
    .map((key) =>
      linkGroups[key].map((item) => {
        return { ...item, group: key };
      })
    )
    .flat(1);
  // console.log(links);
  return links;
};

const Wrapper = styled.svg`
  border: 2px solid black;
  width: 100%;
  height: 100%;
`;

const Network = () => {
  const ref = useRef();

  useEffect(() => {
    const data = {
      nodes: createNodes(nodeGroups),
      links: createLinks(linkGroups),
    };
    const simulation = d3
      .forceSimulation(data.nodes)
      .force(
        "link",
        d3.forceLink(data.links).id((d) => d.id)
      )

      .force("charge", d3.forceManyBody().strength(-500))
      .force(
        "center",
        d3.forceCenter(
          ref.current.clientWidth / 2,
          ref.current.clientHeight / 2
        )
      )
      .force(
        "collision",
        d3.forceCollide().radius((d) => (d.icon ? 50 : d.name.length * 10))
      );

    const svg = d3.select(ref.current);

    const link = svg
      .selectAll("path.link")
      .data(data.links)
      .enter()
      .append("path");

    const node = svg.selectAll("g.node").data(data.nodes);

    var nodeRectangleSettings = { height: 20 };

    const nodeRectangle = node
      .enter()
      .filter((d) => !d.icon)
      .append("rect")
      .attr("width", (d) => d.name.length * 10 + 2)
      .attr("height", nodeRectangleSettings.height + 2 + "px")
      .attr("fill", "#ff6500")
      .attr("text-anchor", "middle")
      .style(
        "transform",
        (d) =>
          "translate(-" +
          (d.name.length * 10 + 2) / 2 +
          "px, " +
          nodeRectangleSettings.height / 2 +
          "px)"
      )
      .style("stroke", "black")
      .style("stroke-width", "1px");

    // svg.call(
    //   d3
    //     .zoom()
    //     .on("zoom", (event) => nodeRectangle.attr("transform", event.transform))
    // );

    const nodeText = node
      .enter()
      .filter((d) => !d.icon)
      .append("text")
      .text((d) => d.name)
      .attr("text-anchor", "middle")
      .style("transform", "translate(0, 25px)")
      .style("font-family", "SFMono");

    const nodeTitle = node
      .enter()
      .append("title")
      .text((d) => d.id);

    const nodeImage = node
      .enter()
      .append("image")
      .attr("width", "50")
      .attr("height", "50")
      .style("transform", "translate(-25px, 0px)")
      .attr("xlink:href", (d) => d.icon);
    // .style("filter", "grayscale(100%)");

    // const linkLine = svg
    //   .selectAll("path")
    //   .attr("stroke", "#ff6500")
    //   .attr("stroke-width", "1")
    //   .attr("stroke-dasharray", "5,5");

    const linkLine = svg
      .selectAll("path")
      .style("transform", "translate(0, 25px)")
      .attr("stroke", "lightgrey")
      .attr("stroke-width", "4")
      .attr("id", (d) => {
        // console.log(d);
        return d.target.id;
      });
    // .attr("stroke-dasharray", "5,5");

    const line = d3.line();

    simulation.on("tick", () => {
      nodeRectangle.attr("cx", (d) => d.x);
      nodeRectangle.attr("cy", (d) => d.y);
      nodeRectangle.attr("x", (d) => d.x);
      nodeRectangle.attr("y", (d) => d.y);
      nodeText.attr("cx", (d) => d.x);
      nodeText.attr("cy", (d) => d.y);
      nodeText.attr("x", (d) => d.x);
      nodeText.attr("y", (d) => d.y);
      nodeImage.attr("cx", (d) => d.x);
      nodeImage.attr("cy", (d) => d.y);
      nodeImage.attr("x", (d) => d.x);
      nodeImage.attr("y", (d) => d.y);
      linkLine.attr("cx", (d) => d.x);
      linkLine.attr("cy", (d) => d.y);
      linkLine.attr("x", (d) => d.x);
      linkLine.attr("y", (d) => d.y);
      nodeTitle.attr("cx", (d) => d.x);
      nodeTitle.attr("cy", (d) => d.y);
      nodeTitle.attr("x", (d) => d.x);
      nodeTitle.attr("y", (d) => d.y);

      link.attr("d", (d) =>
        line([
          [d.source.x, d.source.y],
          [d.target.x, d.target.y],
        ])
      );
    });

    var projectIndex = 0;

    setInterval(() => {
      const selectedLines = svg.selectAll(
        "path#" +
          nodeGroups.projects[projectIndex % nodeGroups.projects.length].id
      );

      selectedLines.transition().delay(100).style("stroke", "black");
      selectedLines.transition().delay(2000).style("stroke", "white");

      projectIndex += 1;
    }, 2000);

    return svg.node();
  }, []);

  return <Wrapper ref={ref} />;
};

export default Network;
