import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
  font-family: SFMono;
`;

const Buttons = () => {
  return (
    <Wrapper>
      <Button number="01">Projects</Button>
      <Button highlight number="02">
        Resume
      </Button>
      <Button number="03">About</Button>
      <Button number="04">Contact</Button>
    </Wrapper>
  );
};

export default Buttons;
