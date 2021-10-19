import styled from "styled-components";

const Wrapper = styled.div`
  color: black;
  height: fit-content;
  margin: 2px;
  //background-image: radial-gradient(white, cyan);
  //box-shadow: 2px 2px 10px lightgrey;
`;

const Title = styled.div`
  font-size: 3px;
  margin-bottom: 2px;
`;

const Card = ({ children, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default Card;
