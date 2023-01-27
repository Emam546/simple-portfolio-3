import "./style.css";
function Stars({
    fullNum = 5,
    ratedNum,
}: {
    fullNum: number;
    ratedNum: number;
}) {
    return (
        <div className="start-rated">
            {Array(fullNum)
                .fill(0)
                .map((_, i) => {
                    if (ratedNum > i)
                        return <i className="fa-solid fa-star" key={i}></i>;
                    return <i className="fa-regular fa-star" key={i}></i>;
                })}
        </div>
    );
}
export default function TESTIMONIALS() {
    return (
        <div className="testimonials" id="testimonials">
            <div className="container">
                <h2 className="special-heading">testimonials</h2>
                <div className="box-container">
                    <div className="box">
                        <div className="img-holder">
                            <img src="/images/avatar-01.png" alt="" />
                        </div>
                        <div className="text-container">
                            <h3>Mohamed Farag</h3>
                            <p className="sub-name">Full Stack Developer</p>
                            <Stars ratedNum={3} fullNum={5} />
                            <p className="text-p">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maiores et reiciendis
                                voluptatum, amet est natus quaerat ducimus
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-holder">
                            <img src="/images/avatar-02.png" alt="" />
                        </div>
                        <div className="text-container">
                            <h3>Mohamed Farag</h3>
                            <p className="sub-name">Full Stack Developer</p>
                            <Stars ratedNum={3} fullNum={5} />
                            <p className="text-p">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maiores et reiciendis
                                voluptatum, amet est natus quaerat ducimus
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-holder">
                            <img src="/images/avatar-03.png" alt="" />
                        </div>
                        <div className="text-container">
                            <h3>Mohamed Farag</h3>
                            <p className="sub-name">Full Stack Developer</p>
                            <Stars ratedNum={3} fullNum={5} />
                            <p className="text-p">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maiores et reiciendis
                                voluptatum, amet est natus quaerat ducimus
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-holder">
                            <img src="/images/avatar-04.png" alt="" />
                        </div>
                        <div className="text-container">
                            <h3>Mohamed Farag</h3>
                            <p className="sub-name">Full Stack Developer</p>
                            <Stars ratedNum={3} fullNum={5} />
                            <p className="text-p">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maiores et reiciendis
                                voluptatum, amet est natus quaerat ducimus
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-holder">
                            <img src="/images/avatar-05.png" alt="" />
                        </div>
                        <div className="text-container">
                            <h3>Mohamed Farag</h3>
                            <p className="sub-name">Full Stack Developer</p>
                            <Stars ratedNum={3} fullNum={5} />
                            <p className="text-p">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maiores et reiciendis
                                voluptatum, amet est natus quaerat ducimus
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-holder">
                            <img src="/images/avatar-06.png" alt="" />
                        </div>
                        <div className="text-container">
                            <h3>Mohamed Farag</h3>
                            <p className="sub-name">Full Stack Developer</p>
                            <Stars ratedNum={3} fullNum={5} />
                            <p className="text-p">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maiores et reiciendis
                                voluptatum, amet est natus quaerat ducimus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
