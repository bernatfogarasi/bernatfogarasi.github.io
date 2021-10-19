import styled from "styled-components";

const Wrapper = styled.div`
  @media only screen and (min-width: 800px) {
    display: none;
  }
  cursor: pointer;
  margin: 0 20px;
`;

const SandwichIconLine = styled.hr`
  width: 30px;
  border: 1px solid;
`;

const SandwichIcon = styled.div``;

const Menu = () => {
  return (
    <Wrapper>
      <SandwichIcon>
        <SandwichIconLine />
        <SandwichIconLine />
        <SandwichIconLine />
      </SandwichIcon>
    </Wrapper>
  );
};

export default Menu;
