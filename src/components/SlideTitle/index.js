import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 130px;
  left: 100px;
  font-family: CalibreSemibold;
  font-size: 40px;
`;

const SlideTitle = ({ children }) => {
  return (
    <Wrapper data-aos="zoom-in" data-aos-delay="200" data-aos-duration="200">
      {children}
    </Wrapper>
  );
};

export default SlideTitle;
