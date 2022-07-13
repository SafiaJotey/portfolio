import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';
import Button from '../MiniComponents/Button/Button';
import './Portfolio.css';

const Project = ({ project }) => {
  console.log(project);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="col-md-4  p-2"
    >
      <div className="bg-white p-2 shadow-sm rounded">
        <div className="image-wrap w-75 ">
          <img className="img-fluid w-100" src={project.image} alt="webpage" />
        </div>

        <a
          href={project.livesite}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-decoration-none text-primary fw-bold mb-5"
        >
          <Button>
            {' '}
            Visit Livesite <BsArrowUpRight></BsArrowUpRight>
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
