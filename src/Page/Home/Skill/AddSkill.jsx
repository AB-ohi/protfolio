// import { useState } from "react";
import "./AddSkill.css";
// eslint-disable-next-line react/prop-types
const AddSkill = ({ skill }) => {
  // eslint-disable-next-line react/prop-types
  const { skillName, skillDetail, skillPercentage, } = skill;
  // const [percentage, setPercentage] = useState();

  const percentage = 472 - ((skillPercentage*472)/100)

 
  return (
    <div className="relative my-[20px] text-center m-auto flex flex-col justify-center items-center w-[400px]">
      <div className="skill">
        <div className="outer">
          <div className="inner flex flex-col">
            <div className="percentage ">{skillPercentage}%</div>
            <div className="name text-xl font-bold">{skillName}</div>
          </div>
        </div>
      </div>

      <svg
        className="colorPer"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" color="#e91e63" />
            <stop offset="100%" color="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" strokeDashoffset={percentage}/>
      </svg>
      <p className="w-[274px] mt-6">{skillDetail}</p>
    </div>
  );
};

export default AddSkill;
