import "./Profile.css";
import Type from "./type";

const Profile = () => {
  return (
    <div className="md:flex justify-around px-3 w-full md:flex-row-reverse" id="profile">
      
      <div className="profile-img-section justify-center md:w-1/2 w-2/3 md:m-0 m-auto z-10">
        <img
          className="profile-bg"
          src="https://i.ibb.co/RSK532C/picbg.png"
          alt=""
        />
        <img
          className="profile-img"
          src="https://i.ibb.co/6B91vTv/mying.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-around ">
        <div>
            <h2 className="md:text-3xl text-xl font-semibold">Hi, I am</h2>
          <div className="flex items-center gap-2">
           
            
            <h1 className="md:text-5xl text-2xl font-bold">Abu Sime Khan Ohi</h1>
            <img
              className="w-[50px]"
              src="../../../../public/img/pngwing.png"
              alt=""
            />
          </div>
          <div className="md:flex w-full m-0 gap-5 justify-start border-opacity-50">
            <div className="divider md:w-[106px]"></div>
            <h2 className="font-semibold">
            <Type></Type>
            </h2>
          </div>
          <div className="md:w-[430px] md:m-0 mt-3">
            <p>
            Currently I am a junior developer due to which my interest in learning is a bit higher.
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center text-2xl font-bold">
          <p>Follow me:</p>
          <a href="https://www.facebook.com/ab.ohi.14" target="{_blank}"> <img className="w-[50px]" src="https://i.ibb.co/1MKG9Wh/Facebook.webp" alt="" /></a>
          <a href="https://www.linkedin.com/in/ohi-khan-030590269/" target="{_blank}"><img className="w-[50px]" src="https://i.ibb.co/PWBtD1B/LinkedIn.png
          " alt="" /></a>
          <a href="https://github.com/AB-ohi" target="{_blank}"><img className="w-[50px]" src="https://i.ibb.co/xg0m12Z/github.png" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
