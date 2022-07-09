import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';
import './Portfolio.css';

const Project = ({ project }) => {
  console.log(project);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="col-md-4  "
    >
      <div className="image-wrap px-3">
        <img src={project.image} alt="webpage" />
      </div>

      <a
        href={project.livesite}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-decoration-none text-primary fw-bold mb-5"
      >
        Visit Livesite <BsArrowUpRight></BsArrowUpRight>
      </a>
    </motion.div>
  );
};

export default Project;
