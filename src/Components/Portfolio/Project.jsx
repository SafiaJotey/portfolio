import { BsArrowUpRight } from 'react-icons/bs';
import './Portfolio.css';

const Project = ({ project }) => {
  console.log(project);
  return (
    <div className="col-md-3  ">
      <div className="image-wrap px-3">
        <a href={project.livesite} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt="webpage" />
        </a>
      </div>

      <a
        href={project.livesite}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-decoration-none text-primary fw-bold mb-5"
      >
        Visit Livesite <BsArrowUpRight></BsArrowUpRight>
      </a>
    </div>
  );
};

export default Project;
