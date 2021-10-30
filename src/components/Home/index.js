import styled from "styled-components";
import Slide from "../Slide";

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

const Home = () => {
  return (
    <Slide>
      <Greetings
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-duration="200"
      >
        Hi, my name is
      </Greetings>
      <Name data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="200">
        Bernat Fogarasi.
      </Name>
      <Motto data-aos="zoom-in" data-aos-delay="1300" data-aos-duration="200">
        I build things for the{" "}
        <span style={{ color: "#ff6500", WebkitTextStroke: "0px black" }}>
          web.
        </span>
      </Motto>
    </Slide>
  );
};

export default Home;
