import { useEffect, useState } from 'react';
import Headings from '../MiniComponents/Headings/Headings';
import Projects from './Projects';

const Portfolio = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('portfolio.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="p-5">
      <div className="container " id="projects">
        <Headings>Projects</Headings>
        <div className="row">
          {data.map((projects) => (
            <Projects projects={projects}></Projects>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
