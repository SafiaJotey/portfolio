const SingleSkill = ({ skill }) => {
  console.log(skill);
  return (
    <div className="col-md-2 col-4 ">
      <div className="my-5">
        <img src={skill.image} alt="skill"></img>
        <p>{skill.name}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
