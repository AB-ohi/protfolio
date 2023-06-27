import "./Profile.css";
import { FaBeer } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="flex items-center justify-around">
      <div className="flex flex-col">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-5xl font-bold">Abu Sime Khan Ohi</h1>
            <img
              className="w-[50px]"
              src="../../../../public/img/pngwing.com.png"
              alt=""
            />
          </div>
          <div className="flex w-full items-center m-0 gap-5 border-opacity-50">
            <div className="divider w-[106px]"></div>
            <h2 className="font-semibold text-3xl">Front-End Developer</h2>
          </div>
          <div className="w-[430px]">
            <p>
              When I look at a website, my eyes see the UI on the website but my
              brain starts thinking about the code of the website.
            </p>
          </div>
        </div>
        <div>
          <a href=""> <FaBeer /></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <div className="profile-img-section">
        <img
          className="profile-bg"
          src="../../../../public/img/picbg.png"
          alt=""
        />
        <img
          className="profile-img"
          src="../../../../public/img/business_facebook_cover_banner_29.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
