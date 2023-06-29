import "./Profile.css";

const Profile = () => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col justify-around">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-5xl font-bold">Abu Sime Khan Ohi</h1>
            <img
              className="w-[50px]"
              src="../../../../public/img/pngwing.com.png"
              alt=""
            />
          </div>
          <div className="flex w-full m-0 gap-5 justify-start border-opacity-50">
            <div className="divider w-[106px]"></div>
            <h2 className="font-semibold text-3xl">MERN Stack Developer</h2>
          </div>
          <div className="w-[430px]">
            <p>
              When I look at a website, my eyes see the UI on the website but my
              brain starts thinking about the code of the website.
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center text-2xl font-bold">
          <p>Follow me:</p>
          <a href="https://www.facebook.com/ab.ohi.14" target="{_blank}"> <img className="w-[50px]" src="../../../../public/img/Facebook_Logo_(2019).png.webp" alt="" /></a>
          <a href=""><img className="w-[50px]" src="../../../../public/img/LinkedIn_icon_circle.svg.png" alt="" /></a>
          <a href=""><img className="w-[50px]" src="../../../../public/img/logo_github_icon_143196.png" alt="" /></a>
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
