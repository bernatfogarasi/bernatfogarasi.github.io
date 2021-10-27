import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 130px;
  left: 100px;
  font-family: CalibreSemibold;
  font-size: 40px;
`;

const SlideTitle = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SlideTitle;
