import styled from "styled-components";

const SlideNextIconLine = styled.hr`
  width: 30px;
  border: 1px solid;
`;

const SlideNextIconLineLeft = styled(SlideNextIconLine)`
  transform: rotate(45deg);
  margin-right: -5px;
`;

const SlideNextIconLineRight = styled(SlideNextIconLine)`
  transform: rotate(-45deg);
  margin-left: -5px;
`;

const SlideNextIcon = styled.div`
  display: flex;
  border: 1px solid;
  width: fit-content;
  cursor: pointer;
  padding: 15px 10px;
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Wrapper = styled.section`
  margin: 150px auto 0 auto;
  scroll-margin-top: 150px;
  height: calc(100vh - 150px) !important;
  scroll-snap-align: start;
  margin-left: 100px;
  margin-right: 100px;
  position: relative;
`;

const Slide = ({ children }) => {
  return (
    <Wrapper>
      {children}
      {/* <SlideNextIcon>
        <SlideNextIconLineLeft />
        <SlideNextIconLineRight />
      </SlideNextIcon> */}
    </Wrapper>
  );
};

export default Slide;
