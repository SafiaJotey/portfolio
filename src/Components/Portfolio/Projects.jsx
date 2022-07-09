import Project from './Project';

const Projects = ({ projects }) => {
  console.log(projects);
  let header;
  for (let key in projects) {
    header = key;
  }

  return (
    <div className="container text-center  my-5 ">
      {/* <h5 className=" fw-bold text-gray mb-3 text-decoration-underline ">
        {header}
      </h5> */}

      <div class="row d-flex justify-content-center align-items-center">
        {projects[header].map((project) => (
          <Project project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
