import { useState } from "react";
import "./style.css";
export default function Header() {
    const [state, setState] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <h2 className="heading-logo">Comment</h2>
                <nav className="header-nav">
                    <ul>
                        <a href="">
                            <li>Articles</li>
                        </a>
                        <a href="">
                            <li>gallary</li>
                        </a>
                        <a href="">
                            <li>Features</li>
                        </a>
                        <li
                            onMouseEnter={() => setState(true)}
                            onMouseLeave={() => setState(false)}
                        >
                            Other Links
                        </li>
                    </ul>
                </nav>
                <div
                    onMouseEnter={() => setState(true)}
                    onMouseLeave={() => setState(false)}
                    className={`sub-menu ${state && "active"}`}
                >
                    <div className="img-holder">
                        <img src="./images/megamenu.png" alt="" />
                    </div>
                    <div className="sub-columns .active">
                        <ul>
                            <a href="">
                                <li>
                                    <i className="fa-regular fa-comments"></i>{" "}
                                    Testimonials{" "}
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <i className="fa-regular fa-user"></i> Team
                                    Members
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <i className="fa-solid fa-server"></i>{" "}
                                    Services{" "}
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <i className="fa-regular fa-circle-check"></i>{" "}
                                    Our Skills{" "}
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <i className="fa-regular fa-clipboard"></i>{" "}
                                    How It Works{" "}
                                </li>
                            </a>
                        </ul>
                        <ul>
                            <a href="">
                                <li>
                                    <i className="fa-regular fa-calendar"></i>{" "}
                                    Events{" "}
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <i className="fa-solid fa-money-bill-1"></i>{" "}
                                    Pricing{" "}
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <i className="fa-regular fa-circle-play"></i>{" "}
                                    Top Videos
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <i className="fa-solid fa-chart-column"></i>{" "}
                                    Stats{" "}
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <i className="fa-solid fa-percent"></i>{" "}
                                    Request A Discount
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
