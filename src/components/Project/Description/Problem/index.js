import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0;
`;

const Problem = ({ children }) => {
  return (
    <Wrapper>
      Problem:
      <br />
      {children}
    </Wrapper>
  );
};

export default Problem;
