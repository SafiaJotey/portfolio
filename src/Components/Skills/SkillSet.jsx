import SingleSkill from './SingleSkill';

const SkillSet = ({ d }) => {
  console.log(d);
  let header;
  for (let key in d) {
    header = key;
  }

  return (
    <div className="container text-center">
      <h4 className=" ">{header}</h4>

      <div class="row d-flex justify-content-center align-items-center">
        {d[header].map((skill) => (
          <SingleSkill skill={skill}></SingleSkill>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
