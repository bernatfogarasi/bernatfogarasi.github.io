import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0;
`;

const Solution = ({ children }) => {
  return <Wrapper>Solution: {children}</Wrapper>;
};

export default Solution;
