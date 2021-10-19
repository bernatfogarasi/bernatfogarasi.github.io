import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Slide from "../Slide";
// import squares from "./squares.jpg";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: lightgrey;
`;

const Greetings = styled.span`
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
  /* line-height: 0.8em; */
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

const Title = styled.div`
  font-family: CalibreSemibold;
  font-size: 40px;
`;

const Description = styled.div`
  font-family: Calibre;
  font-size: 20px;
  text-align: justify;
`;

const Content = () => {
  return (
    <Wrapper>
      <Category>
        <CategoryLine />
        Projects
      </Category>

      <Slide>
        <Greetings>Hi, my name is</Greetings>
        <Name>Bernat Fogarasi.</Name>
        <Motto>
          I build things for the <span style={{ color: "#ff6500" }}>web.</span>
        </Motto>
      </Slide>
      <Slide>
        <Description>
          <Title>AlgoVisualizer</Title>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
          {/* <iframe
            style={{ position: "absolute" }}
            src="https://brittanychiang.com/"
            frameborder="0"
            width={300}
            height={400}
          ></iframe> */}
        </Description>
      </Slide>
      <Slide>
        <Title>Resume</Title>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Description>
      </Slide>
      <Slide>
        <Title>About</Title>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Description>
      </Slide>
      <Slide>
        <Title>Contact</Title>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Description>
      </Slide>
    </Wrapper>
  );
};

export default Content;
