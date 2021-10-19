import styled, { css } from "styled-components";

const Number = styled.span``;

const Text = styled.span``;

const Wrapper = styled.span`
  animation: rotate-text 2s infinite;
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
  position: relative;
  height: fit-content;
  ${({ highlight }) => highlight && highlightStyle}
  :hover {
    border: 2px dashed #ff6500;
    padding: 8px;
  }
  :active {
    border-style: solid;
    animation: active 0.3s;
  }
  @keyframes active {
  }
  /* ::after {
    content: "";
    position: absolute;
    bottom: 14px;
    left: 0;
    width: 100%;
    transform: scale(0, 1);
    transition: transform 0.4s ease;
    border-bottom: 4px dotted black;
  }
  :hover::after {
    transform: scale(1, 1);
  } */
`;

const highlightStyle = css`
  color: #ff781e;
`;

const Button = ({ children, number, highlight }) => {
  return (
    <Wrapper highlight={Boolean(highlight)}>
      {/* <Number>{number}.</Number> */}
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Button;
