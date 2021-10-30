import styled from "styled-components";

const Wrapper = styled.div`
  margin: 200px 100px 50px 100px;
  position: absolute;
  height: calc(100vh - 250px);
  width: calc(100% - 200px);
  top: 0;
  left: 0;
`;

const Content = (props) => {
  return (
    <Wrapper
      ref={props.innerRef}
      // data-aos="fade-in"
      // data-aos-delay="400"
      // data-aos-duration="200"
      {...props}
    ></Wrapper>
  );
};

export default Content;
