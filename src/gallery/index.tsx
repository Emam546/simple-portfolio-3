import "./style.css";
export default function Gallery() {
    return (
        <div className="gallery">
            <div className="container">
                <h2 className="special-heading">gallery</h2>
                <div className="boxes-container">
                    <div className="box">
                        <div className="image">
                            <img src="./images/gallery-01.png" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="./images/gallery-02.png" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="./images/gallery-03.jpg" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="./images/gallery-04.png" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="./images/gallery-05.jpg" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="./images/gallery-06.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
