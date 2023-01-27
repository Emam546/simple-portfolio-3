import { Dots } from "../dots";
import "./style.css";
export default function Pricing() {
    return (
        <div className="pricing">
            <Dots />
            <div className="container">
                <div className="special-heading">pricing plans</div>
                <div className="box-container">
                    <div className="box">
                        <span className="most-popular">Most-popular</span>
                        <h1 className="box-title">Basic</h1>
                        <i className="fa-solid fa-server icon"></i>
                        <h1 className="price dollar">25</h1>
                        <p>per month</p>
                        <ul className="box-features">
                            <li>10GB HDD Space</li>
                            <li>5 Email Addresses</li>
                            <li>2 Subdomains</li>
                            <li>4 Databases</li>
                            <li>Basic Support</li>
                        </ul>
                        <a href="" className="choose-button">choose plan</a>
                    </div>
                    <div className="box popular">
                        <span className="most-popular">Most-popular</span>
                        <h1 className="box-title">Basic</h1>
                        <i className="fa-solid fa-server icon"></i>
                        <h1 className="price dollar">25</h1>
                        <p>per month</p>
                        <ul className="box-features">
                            <li>10GB HDD Space</li>
                            <li>5 Email Addresses</li>
                            <li>2 Subdomains</li>
                            <li>4 Databases</li>
                            <li>Basic Support</li>
                        </ul>
                        <a href="" className="choose-button">choose plan</a>
                    </div>
                    <div className="box">
                        <span className="most-popular">Most-popular</span>
                        <h1 className="box-title">Basic</h1>
                        <i className="fa-solid fa-server icon"></i>
                        <h1 className="price dollar">25</h1>
                        <p>per month</p>
                        <ul className="box-features">
                            <li>10GB HDD Space</li>
                            <li>5 Email Addresses</li>
                            <li>2 Subdomains</li>
                            <li>4 Databases</li>
                            <li>Basic Support</li>
                        </ul>
                        <a href="" className="choose-button">choose plan</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
