import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  font-family: SFMono;
  font-size: 30px;
  cursor: pointer;
  height: 30px;
`;

const Letter = styled.div`
  position: absolute;
`;

const B = styled(Letter)``;

const F = styled(Letter)`
  left: 15px;
  top: 10px;
`;

const Logo2 = () => {
  return (
    <Wrapper>
      <B>b</B>
      <F>f</F>
    </Wrapper>
  );
};

export default Logo2;
