import "./style.css";
export default function () {
    return (
        <div className="stats overlay" id="stats">
            <div className="container">
                <h1 className="header-text">Our Awesome Stats</h1>
                <div className="content-container">
                    <div className="box">
                        <i className="fa-regular fa-user"></i>
                        <span className="num">150</span>
                        <span className="title">Clients</span>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-code"></i>
                        <span className="num">135</span>
                        <span className="title">Projects</span>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-earth-americas"></i>
                        <span className="num">50</span>
                        <span className="title">Countries</span>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-money-check-dollar"></i>
                        <span className="num">500</span>
                        <span className="title">Money</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
