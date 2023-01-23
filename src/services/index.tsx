import "./style.css";
export function Services() {
    return (
        <div className="services">
            <div className="container">
                <h2 className="special-heading">services</h2>
                <div className="box-container">
                    <div className="box">
                        <div className="badge">
                            <i className="fa-sharp fa-solid fa-shield-halved"></i>
                            <h2>Security</h2>
                        </div>
                        <div className="tail">
                            <a href="">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="badge">
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                            <h2>fix issues</h2>
                        </div>
                        <div className="tail">
                            <a href="">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="badge">
                            <i className="fa-solid fa-map-location-dot"></i>
                            <h2>location</h2>
                        </div>
                        <div className="tail">
                            <a href="">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="badge">
                            <i className="fa-solid fa-laptop-code"></i>
                            <h2>coding</h2>
                        </div>
                        <div className="tail">
                            <a href="">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="badge">
                            <i className="fa-solid fa-palette"></i>
                            <h2>designing</h2>
                        </div>
                        <div className="tail">
                            <a href="">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="badge">
                            <i className="fa-solid fa-bullhorn"></i>
                            <h2>marketing</h2>
                        </div>
                        <div className="tail">
                            <a href="">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
