import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";
import nodeGroups from "./nodeGroups";
import linkGroups from "./linkGroups";
import Controls from "./Controls";

const createNodes = (nodeGroups) => {
  const nodes = Object.keys(nodeGroups)
    .map((key) =>
      nodeGroups[key].map((item) => {
        return { ...item, group: key };
      })
    )
    .flat(1);
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
  return links;
};

const Wrapper = styled.div`
  border: 2px solid;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Network = () => {
  const ref = useRef();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    console.log([x, y, scale]);

    const svg = d3.select(ref.current);

    svg
      .selectAll("g")
      .transition()
      .style("transform-origin", "center")
      .attr(
        "transform",
        "translate(" + -x * 80 + ", " + y * 80 + ")" + "scale(" + scale + ")"
      );
  }, [x, y, scale]);

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

      .force("charge", d3.forceManyBody().strength(-Math.random() * 2000))
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

    const svg = d3.select(ref.current).append("g");

    svg
      .attr("viewBox", 0 + " " + 0 + " " + 500 + " " + 800)
      .attr("preserveAspectRatio", "xMidYMid meet");

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
      .attr("width", (d) => d.name.length * 10 + 16)
      .attr("height", nodeRectangleSettings.height + 8 + "px")
      .attr("fill", "white")
      .attr("text-anchor", "middle")
      .style(
        "transform",
        (d) =>
          "translate(-" +
          (d.name.length * 10 + 16) / 2 +
          "px, " +
          (nodeRectangleSettings.height - 8) / 2 +
          "px)"
      )
      .style("stroke", "black")
      .style("stroke-width", "1px");

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
      .attr("width", "40")
      .attr("height", "40")
      .style("transform", "translate(-25px, 0px)")
      .attr("xlink:href", (d) => d.icon);
    // .style("filter", "grayscale(100%)");

    const linkLine = svg
      .selectAll("path")
      .style("transform", "translate(0, 25px)")
      .attr("stroke", "lightgrey")
      .attr("stroke-width", "4")
      .attr("id", (d) => d.target.id);

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
      selectedLines.transition().delay(2000).style("stroke", "lightgrey");

      projectIndex += 1;
    }, 2000);

    return svg.node();
  }, []);

  return (
    <Wrapper>
      <SVG ref={ref}></SVG>
      <Controls
        callback={(direction) => {
          if (direction === "up") {
            setY((n) => Math.min(n + 1, 5));
          }
          if (direction === "down") {
            setY((n) => Math.max(n - 1, -5));
          }
          if (direction === "right") {
            setX((n) => Math.min(n + 1, 5));
          }
          if (direction === "left") {
            setX((n) => Math.max(n - 1, -5));
          }
          if (direction === "in") {
            setScale((n) => Math.min(n * 1.2, 2));
          }
          if (direction === "out") {
            setScale((n) => Math.max(n / 1.2, 0.3));
          }
        }}
      />
    </Wrapper>
  );
};

export default Network;
