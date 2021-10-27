import styled from "styled-components";

const Wrapper = styled.div`
  margin: 200px 100px 50px 100px;
  position: absolute;
  height: calc(100vh - 250px);
  width: calc(100% - 200px);
  top: 0;
  left: 0;
`;

const SlideContent = (props) => {
  return <Wrapper {...props}></Wrapper>;
};

export default SlideContent;
