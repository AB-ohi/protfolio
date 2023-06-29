import "./AboutMe.css";
import Resume from '../../../../public/img/Abu Sime Khan Ohi (1) (1).pdf'

const AboutMe = () => {
  return (
    <div className="about-me flex items-center my-[50px] text-white justify-center gap-36 py-[100px]">
      <img className="w-1/3" src="../../../../public/img/backGround(2).png" alt="" />
      <div>
        <h1 className="text-7xl mb-4">About Me</h1>
        <p className="w-[500px] mb-6">
          I am a Fontend developer. Currently I am in the developing learning
          stage. I have a lot of interest in learning so I think I can develop
          my skills more.
        </p>
        <div className="">
            <a className="btn download-re" href={Resume} download='resume'>Download Resume</a>
            <a className="btn view-re" href="">View Resume</a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
