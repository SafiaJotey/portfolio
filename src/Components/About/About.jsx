import myPhoto from '../../assets/Images/SafiaJotey.jpg';

const About = () => {
  return (
    <div className="container-md">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-5 p-5 ">
          <img className="img-fluid" src={myPhoto} alt="" />
        </div>
        <div class="col-12 col-md-7 pe-none p-5">
          {' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            fuga sequi dolorum vitae molestias odit. Iure accusantium inventore
            quibusdam in.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            amet, eligendi iste reiciendis explicabo consectetur nisi dolorum
            quod. Quis dignissimos, numquam iusto vero eaque distinctio nam
            voluptatibus repellendus itaque perferendis!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            odio porro laborum est possimus facilis amet minima totam, doloribus
            unde.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
