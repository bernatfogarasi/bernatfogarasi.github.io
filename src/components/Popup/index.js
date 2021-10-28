import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: scroll;
`;

const Background = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.3);
`;

const PopupWindow = styled.div`
  width: min(60%, 400px);
  height: fit-content;
  background: white;
  border-radius: 10px;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  padding: 20px;
  position: fixed;
`;

const PopupContent = styled.div`
  font-size: 20px;
`;

const PopupClose = styled.div`
  display: flex;
  float: right;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 20px;
  :hover {
    hr {
      border: 1px solid grey;
    }
  }
`;

const PopupCloseLine = styled.hr`
  position: absolute;

  width: 20px;
  border: 1px solid black;
  transform-origin: center center;
`;

const PopupCloseLineForward = styled(PopupCloseLine)`
  transform: rotate(-45deg);
`;

const PopupCloseLineBack = styled(PopupCloseLine)`
  transform: rotate(45deg);
`;

const Popup = ({ children, initialShow }) => {
  const [show, setShow] = useState(true);

  const pressedEscape = useCallback((event) => {
    if (event.key === "Escape") {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = initialShow && show ? "hidden" : "scroll";
  }, [initialShow, show]);

  useEffect(() => {
    document.addEventListener("keydown", pressedEscape, false);
  }, []);

  return (
    <Wrapper hidden={!(initialShow && show)}>
      <Background onClick={() => setShow(false)} />
      <PopupWindow>
        <PopupClose onClick={() => setShow(false)}>
          <PopupCloseLineForward />
          <PopupCloseLineBack />
        </PopupClose>
        <PopupContent>{children}</PopupContent>
      </PopupWindow>
    </Wrapper>
  );
};

export default Popup;
