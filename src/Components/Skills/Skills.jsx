import { useEffect, useState } from 'react';
import SkillSet from './SkillSet';

const Skills = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <h2>Skills</h2>
      {data.map((d) => (
        <SkillSet d={d}></SkillSet>
      ))}
    </div>
  );
};

export default Skills;
