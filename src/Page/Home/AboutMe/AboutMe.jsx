import "./AboutMe.css";
import Resume from '../../../../public/img/resme.pdf'

const AboutMe = () => {
  return (
    <div className="about-me md:flex items-center my-[50px] text-white justify-center gap-36 py-[100px]" id="aboutMe">
      <img className="md:w-1/3" src="https://i.ibb.co/pJLKq5X/back-Ground-2.png" alt="" />
      <div className="px-2">
        <h1 className="text-7xl mb-4">About Me</h1>
        <p className="md:w-[500px] mb-6">
          I am a Fontend developer. Currently I am in the developing learning
          stage. I have a lot of interest in learning so I think I can develop
          my skills more.
        </p>
        <div className="">
            <a className="btn download-re" href={Resume} download='resume'>Download Resume</a>
            
            <a className="btn view-re" target="{_blank}" href="https://drive.google.com/file/d/13AxK5WCu0XCBuUhRmLlJysV6GLu9rRSm/view?usp=sharing">View Resume</a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
