import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Skill from "../Skill/Skill";

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <Header></Header>
            <AboutMe></AboutMe>
            <div className="other-bg">
                <Skill></Skill>
            </div>
        </div>
    );
};

export default Home;