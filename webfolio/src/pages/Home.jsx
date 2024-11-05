import ProfilePicture from '../assets/profile.jpg';
import ProfileAltPicture from '../assets/profile-alt.jpg';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <div className="dark-overlay mx-auto w-75 mt-5 mb-5">
            <div className="row align-items-center">
                {/* Left Column - Welcome Text */}
                <div className="col-md-6 text-start">
                    <h1>Welcome to My Portfolio</h1>
                    <p>
                        Hi! I'm Hailey, a passionate web developer with a love for creating visually
                        captivating and functional web experiences. I also take pride in clean and modern code bases. Take a look around to see my projects and learn more about me.
                    </p>
                    <Link to="/projects">
                        <button className="btn btn-primary mt-3    hero-button">View My Projects</button>
                    </Link>
                </div>

                {/* Right Column - Profile Image */}
                <div className="col-md-6 d-flex justify-content-center">
                    <img
                        src={ProfileAltPicture}
                        alt="Profile Picture of the Site Owner"
                        className="img-fluid rounded-circle"
                        style={{ maxWidth: '250px' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;