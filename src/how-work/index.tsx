import "./style.css"
export default function HowItWorks() {
    return (
        <div className="howItWorks" id="howItWorks">
            <div className="container">
                <h2 className="special-heading">how it works</h2>
                <div className="content-container">
                    <img src="./images/work-steps.png" alt="" />
                    <div className="boxes-container">
                        <div className="box">
                            <img src="./images/work-steps-1.png" alt="" />
                            <div className="text-container">
                                <h3>Business Analysis</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Enim nesciunt obcaecati
                                    quisquam quis laborum recusandae debitis vel
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <img src="./images/work-steps-2.png" alt="" />
                            <div className="text-container">
                                <h3>Architecture</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Enim nesciunt obcaecati
                                    quisquam quis laborum recusandae debitis vel
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <img src="./images/work-steps-3.png" alt="" />
                            <div className="text-container">
                                <h3>Development</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Enim nesciunt obcaecati
                                    quisquam quis laborum recusandae debitis vel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
