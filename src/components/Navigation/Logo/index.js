import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 20px;
  position: relative;
  font-family: CalibreSemibold;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Wrapper>
      Bernat
      <br />
      Fogarasi
    </Wrapper>
  );
};

export default Logo;
