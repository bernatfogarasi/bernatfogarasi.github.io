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
  right: 0;
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
    color: #ff6500;
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

const ZoomControl = styled.div`
  cursor: pointer;
  color: black;
  padding: 2px;
  font-size: 30px;
  font-family: SFMono;
  display: flex;
  justify-content: center;
  align-items: space-between;
  /* border: 0; */
  background: transparent;
  :hover {
    color: #ff6500;
  }
  border: 1px solid;
`;

const In = styled(ZoomControl)``;

const Out = styled(ZoomControl)``;

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
        <In>+</In>
        <Out>-</Out>
      </ZControls>
    </Wrapper>
  );
};

export default Controls;
