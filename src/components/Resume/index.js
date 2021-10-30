import styled from "styled-components";
import Slide from "../Slide";
import resume from "./../../assets/images/resume.png";

const Image = styled.img`
  height: 100%;
  border: 1px solid;
  cursor: pointer;
`;

const Resume = () => {
  return (
    <Slide title="Resume">
      <Image src={resume} alt="Not found" />
    </Slide>
  );
};

export default Resume;
