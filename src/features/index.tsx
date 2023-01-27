import "./style.css";
export default function Features() {
    return (
        <div className="features" id="features">
            <div className="container">
                <h2 className="special-heading">features</h2>
                <div className="boxes-container">
                    <div className="box box-red">
                        <div className="img-holder">
                            <img src="/images/features-01.jpg" alt="" />
                        </div>
                        <div className="text-container">
                            <h1>Quality</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odit harum hic veniam eligendi
                                minima
                            </p>
                        </div>
                        <div className="more-button">
                            <a href="">
                                more
                            </a>
                        </div>
                    </div>
                    <div className="box box-green">
                        <div className="img-holder">
                            <img src="/images/features-02.jpg" alt="" />
                        </div>
                        <div className="text-container">
                            <h1>Time</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odit harum hic veniam eligendi
                                minima
                            </p>
                        </div>
                        <div className="more-button">
                            <a href="">
                                more
                            </a>
                        </div>
                    </div>
                    <div className="box box-blue">
                        <div className="img-holder">
                            <img src="/images/features-03.jpg" alt="" />
                        </div>
                        <div className="text-container">
                            <h1>Passion</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odit harum hic veniam eligendi
                                minima
                            </p>
                        </div>
                        <div className="more-button">
                            <a href="">
                                more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
