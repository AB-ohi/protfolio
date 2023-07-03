import Project from "../../Project/Project";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Skill from "../Skill/Skill";

const Home = () => {
    return (
        <div id='home'>
            <Profile></Profile>
            <Header></Header>
            <AboutMe></AboutMe>
            <div className="other-bg">
                <Skill></Skill>
                <Project></Project>
                <ContactMe></ContactMe>
            </div>
        </div>
    );
};

export default Home;