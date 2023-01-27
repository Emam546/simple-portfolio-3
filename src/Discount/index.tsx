import { useEffect, useState } from "react";
import "./style.css";
const images = ["/images/discount.png", "/images/discount2.png"];
export default function Discount() {
    const [i, setI] = useState(0);
    useEffect(() => {
        setI(Math.round(1 * Math.random()));
    }, []);
    return (
        <div className="discount" id="discount">
            <div className="discount-info overlay">
                <div className="text-container">
                    <h1>We Have A Discount</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Excepturi asperiores consectetur, recusandae
                        ratione provident necessitatibus, cumque delectus
                        commodi fuga praesentium beatae. Totam vel similique
                        laborum dicta aperiam odit doloribus corporis.
                    </p>
                </div>
                <div className="img-holder">
                    <img src={images[i]} alt="" />
                </div>
            </div>
            <form action="" method="post" autoComplete="off">
                <div className="input-container">
                    <h1 className="header-text">Request A Discount</h1>
                    <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Your Name"
                    />
                    <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Your Email"
                    />
                    <input
                        type="text"
                        name="phone"
                        id=""
                        placeholder="Your Phone"
                    />
                    <textarea
                        name="needs"
                        placeholder="Tell Us About Your Needs"
                        id=""
                    ></textarea>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
}
