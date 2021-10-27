import styled from "styled-components";

// const SlideNextIconLine = styled.hr`
//   width: 30px;
//   border: 1px solid;
// `;

// const SlideNextIconLineLeft = styled(SlideNextIconLine)`
//   transform: rotate(45deg);
//   margin-right: -5px;
// `;

// const SlideNextIconLineRight = styled(SlideNextIconLine)`
//   transform: rotate(-45deg);
//   margin-left: -5px;
// `;

// const SlideNextIcon = styled.div`
//   display: flex;
//   border: 1px solid;
//   width: fit-content;
//   cursor: pointer;
//   padding: 15px 10px;
//   position: absolute;
//   bottom: 100px;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
// `;

const Wrapper = styled.section`
  position: relative;
  scroll-snap-align: start;
  height: 100vh;
`;

const Slide = (props) => {
  return <Wrapper {...props}></Wrapper>;
};

export default Slide;
