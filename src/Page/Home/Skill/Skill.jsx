import { useEffect, useState } from "react";
import AddSkill from "./AddSkill";
import './AddSkill.css'

const Skill = () => {
    const [skills,setSkills] = useState([]) 

    useEffect(()=>{
        fetch("skills.json")
        .then(res =>res.json())
        .then(data =>{
                console.log(data)
            setSkills(data)
        })
    },[])
    return (
        <div className="skill-container" id="skill">
            <h1 className="text-5xl font-bold mb-4 mt-6 text-center">My Skill</h1>
            <div className="divider w-[290px] m-auto"></div>
            <div className="md:grid grid-cols-4 gap-x-11-11 justify-center items-center" style={{justifyItems:"center"}}>
                {
                    skills.map((skill)=>
                        <AddSkill 
                        key={skill._id} 
                        skill={skill}>
                        </AddSkill>
                    )
                }
            </div>
        </div>
    );
};

export default Skill;