const SingleSkill = ({ skill }) => {
  console.log(skill);
  return (
    <div className="col-md-2">
      <img src={skill.image} alt="skill"></img>
      <p>{skill.name}</p>
    </div>
  );
};

export default SingleSkill;
