import Lottie from 'react-lottie';
import animationData from '../../assets/lottiefiles/banner.json';
import useMediaQuery from '../../hook/useMediaQuary';
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
    <div className="container-md">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-6 ">
          <h1 className="fw-bold">Hi There, </h1>
          <h1 className="fw-bold">I am Safia Ahmed</h1>
          <h3>I am a Frontend Developer</h3>
        </div>
        <div class="col-12 col-md-6 pe-none ">
          {' '}
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            style={{ width: '{isDesktop ? 700 : isTablet ? 400 : 200}}' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
