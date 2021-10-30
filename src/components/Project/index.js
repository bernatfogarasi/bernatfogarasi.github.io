import Slide from "../Slide";
import Scene from "./Scene";
import Description from "./Description";

const Project = ({ title, problem, solution }) => {
  return (
    <>
      <Slide
        title={title}
        outer={<Scene side="right" src="https://bernatfogarasi.github.io" />}
      >
        <Description problem={problem} solution={solution} />
      </Slide>
    </>
  );
};

export default Project;
