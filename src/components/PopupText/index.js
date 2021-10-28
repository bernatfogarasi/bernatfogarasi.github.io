import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 20px;
  font-family: Calibre;
  text-align: justify;
  margin: 20px 10px;
`;

const PopupText = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PopupText;
