import { useEffect, useState } from 'react';
import Headings from '../MiniComponents/Headings/Headings';
import SkillSet from './SkillSet';

const Skills = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-white p-5">
      <div className="container my-5 ">
        <Headings>My Skills</Headings>
        {data.map((d) => (
          <SkillSet d={d}></SkillSet>
        ))}
      </div>
    </div>
  );
};

export default Skills;
