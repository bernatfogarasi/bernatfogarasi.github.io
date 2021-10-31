import styled from "styled-components";
// import Arrow from "./Arrow";

const Wrapper = styled.div``;

const ControlsWrapper = styled.div`
  position: absolute;
  border: 2px solid;
  background: white;
`;

const ZControls = styled(ControlsWrapper)`
  bottom: 0;
  right: 102px;
  width: 50px;
  height: 100px;
`;

const XYControls = styled(ControlsWrapper)`
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
`;

const Arrow = styled.button`
  position: absolute;
  cursor: pointer;
  color: black;
  padding: 2px;
  font-size: 30px;
  border: 0;
  background: transparent;
  :hover {
    color: lightgrey;
  }
  :active {
    color: grey;
  }
`;

const Up = styled(Arrow)`
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Right = styled(Arrow)`
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const Down = styled(Arrow)`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Left = styled(Arrow)`
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const ZoomControl = styled.button`
  position: absolute;
  border: 0px;
  width: 50px;
  height: 50px;
  font-size: 40px;
  font-family: SFMono;
  background: transparent;
  color: black;
  cursor: pointer;
  :hover {
    color: lightgrey;
  }
`;

const In = styled(ZoomControl)`
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Out = styled(ZoomControl)`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Controls = ({ callback }) => {
  return (
    <Wrapper>
      <XYControls>
        <Up onClick={() => callback("up")}>▲</Up>
        <Right onClick={() => callback("right")}>►</Right>
        <Down onClick={() => callback("down")}>▼</Down>
        <Left onClick={() => callback("left")}>◄</Left>
      </XYControls>
      <ZControls>
        <In onClick={() => callback("in")}>+</In>
        <Out onClick={() => callback("out")}>-</Out>
      </ZControls>
    </Wrapper>
  );
};

export default Controls;
