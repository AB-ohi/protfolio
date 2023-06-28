import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <Header></Header>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;