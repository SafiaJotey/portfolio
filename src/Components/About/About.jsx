import { motion } from 'framer-motion';
import myPhoto from '../../assets/Images/SafiaJotey.jpg';
import Button from '../MiniComponents/Button/Button';

const About = () => {
  return (
    <div className="container-md my-5">
      <div class="row d-flex justify-content-center align-items-center">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          class="col-12 col-md-5 p-5 "
        >
          <img
            className="img-fluid border border-1 rounded-3  border-secondary"
            src={myPhoto}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          class="col-12 col-md-7  p-5"
        >
          {' '}
          <div
            className="d-flex flex-column justify-content-center align-items-center my-3 "
            id="about"
          >
            {' '}
            <h2 className="text-primary fw-bold ">About Me</h2>
            <p className="text-gray">A passionate Web Developer</p>
          </div>
          <div>
            <p>
              Hello, I am{' '}
              <span className="fs-5 text-primary fst-italic">Safia Ahmed</span>.
              I am a Web Developer. I am from Dhaka, Bangladesh.
            </p>
            <p>
              I have completed BSc in the department of Computer Science and
              Engineering at Daffodil international university. I love to create
              new things and learn every day.I am passionate about web
              developing. I have knowledge of technologies and done some
              projects using those technologies.
            </p>
            {/* <p>
              I am looking for an opportunity To take a challenging role as a
              developer in an atmosphere where I can learn new things , utilize
              my skills, abilities and contribute my skills and specializations
              to aid my community.
            </p> */}
          </div>
          <Button>
            <a
              className="text-decoration-none text-light"
              href="https://drive.google.com/file/d/1UZjo_WAWMpG-hBn8tMhrHQFe1dgOCW08/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
