// eslint-disable-next-line react/prop-types
const ProjectCard = ({project}) => {
  // eslint-disable-next-line react/prop-types
  const {projectName, projectImage, projectLiveLink} = project
    return (
        <div>
           <figure>
            <img
            className="md:h-[422px] md:w-[644px]"
              src={projectImage}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projectName}</h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div className="card-actions justify-end">
              <button className="btn btn-primary"><a href={projectLiveLink} target="{_blank}">View Site</a></button>
            </div>
          </div>
        </div>
    );
};

export default ProjectCard;