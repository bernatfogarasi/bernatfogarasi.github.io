import styled from "styled-components";

const Wrapper = styled.div`
  margin: 40px 0;
`;

const Input = ({ children, type, name, label }) => {
  return (
    <Wrapper>
      <LabelWrapper>{label}</LabelWrapper>
      <InputWrapper type={type} name={name} />
    </Wrapper>
  );
};

export default Input;
