const SingleSkill = ({ skill }) => {
  console.log(skill);
  return (
    <div className="col-md-2 col-4 ">
      <div className="my-5 d-flex flex-column justify-content-center align-items-center">
        <img src={skill.image} alt="skill"></img>
        <p className="text-primary">{skill.name}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
