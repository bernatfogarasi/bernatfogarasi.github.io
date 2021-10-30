import styled from "styled-components";
import Solution from "./Solution";
import Problem from "./Problem";

const Wrapper = styled.div`
  font-family: Calibre;
  font-size: 20px;
  width: 50%;
`;

const Description = ({ children, problem, solution }) => {
  return (
    <Wrapper>
      <Problem>{problem}</Problem>
      <Solution>{solution}</Solution>
      {children}
    </Wrapper>
  );
};

export default Description;
