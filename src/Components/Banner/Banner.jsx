import Typewriter from 'typewriter-effect';

import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottiefiles/banner.json';
import useMediaQuery from '../../hook/useMediaQuary';
import Animation from '../Animation/Animation';
import Button from '../Button/Button';
const Banner = () => {
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="bg-dark overflow-hidden position-relative">
      <Animation></Animation>
      <div className="position-absolute bottom-50 px-2">
        <div className="d-flex flex-colum flex-md-column   justify-content-center align-items-center">
          <a
            href="http://www.linkedin.com/in/safiajotey"
            className="text-decoration-none text-light m-2"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="text-secondary  fs-6 m-2" />
          </a>
          <a
            href="https://github.com/SafiaJotey"
            className="text-decoration-none text-light m-2"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="text-secondary  fs-6 m-2" />
          </a>
          <a
            href="https://www.facebook.com/safiajotey"
            className="text-decoration-none text-light"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <AiFillFacebook className="text-secondary  fs-6 m-2" />
          </a>
        </div>
      </div>
      <div className="container-md ">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-6 py-5">
            <h3 className="fw-bold text-light fs-4">Hi There, </h3>
            <h1 className="fw-bolder text-light fs-1">
              I am <span className="text-light">Safia Ahmed</span>
            </h1>
            <h3 className="text-light fs-4 my-4  d-flex justify-content-start">
              I am a &nbsp;
              <span className="text-secondary ">
                <Typewriter
                  options={{
                    strings: [
                      ' Web Designer',
                      'React Developer',
                      'Web Developer',
                    ],
                    autoStart: true,
                    delay: 75,
                    loop: true,
                  }}
                />
              </span>
            </h3>
            <div className="d-flex justify-content-start align-items-center my-5">
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
              <Button>Contact me</Button>
            </div>
          </div>
          <div class="col-12 col-md-5 pe-none ">
            {' '}
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 700 : isTablet ? 500 : 500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
