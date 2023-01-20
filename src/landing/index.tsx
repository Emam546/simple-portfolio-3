import "./style.css";
export default function Landing() {
    return (
        <div className="landing">
            <div className="container">
                <div className="text-container">
                    <h1>Welcome, To Elzero World</h1>
                    <p>
                        Here Iam gonna share everything about my life. Books Iam
                        reading, Games Iam Playing, Stories and Events
                    </p>
                </div>
                <div className="img-holder">
                    <img src="./images/landing-image.png" alt="" />
                </div>
                <a href="#articles">
                    <i className="fa-solid fa-angles-down sideDown-arrow"></i>
                </a>
            </div>
        </div>
    );
}
