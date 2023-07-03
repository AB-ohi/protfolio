import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    fetch("https://my-portfolio-server-neon-seven.vercel.app/project")
    .then(res => res.json())
    .then(data => {
      setProjects(data)
    })
  },[])
  return (
    <div className="mt-[50px]" id="project">
      <h1 className="text-5xl font-bold mb-4 text-center">Project</h1>
      <div className="divider w-[290px] m-auto" />
      <div>
        <div className="md:grid grid-cols-3 gap-3 justify-center card card-compact bg-base-100 shadow-xl">
          {
            projects.map(project=><ProjectCard
            key={project._id}
            project = {project}
            ></ProjectCard>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Project;
