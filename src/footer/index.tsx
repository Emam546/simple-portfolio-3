import "./style.css";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-media">
                    <h1>Imam</h1>
                    <div className="social-icons">
                        
                        <a href=""><i className="fa-brands fa-facebook-f facebook"></i></a>
                        <a href=""><i className="fa-brands fa-twitter twitter"></i></a>
                        <a href=""><i className="fa-brands fa-youtube youtube"></i></a>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Temporibus nulla rem, dignissimos iste aspernatur
                    </p>
                </div>
                <ul className="important-links">
                    <li>
                        <a href=""> Important Link 1 </a>
                    </li>
                    <li>
                        <a href=""> Important Link 2 </a>
                    </li>
                    <li>
                        <a href=""> Important Link 3 </a>
                    </li>
                    <li>
                        <a href=""> Important Link 4 </a>
                    </li>
                    <li>
                        <a href=""> Important Link 5 </a>
                    </li>
                </ul>
                <ul className="contact-info">
                    <li>
                        <i className="fa-solid fa-location-pin"></i>
                        Egypt, Giza, Inside The Sphinx, Room Number 220
                    </li>
                    <li>
                        <i className="fa-regular fa-clock"></i>
                        Business Hours: From 10:00 To 18:00
                    </li>
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        +20123456789 +201091907365
                    </li>
                </ul>
                <div className="gallery-footer">
                    <div className="img-holder">
                        <img src="/images/gallery-01.png" alt="" />
                    </div>
                    <div className="img-holder">
                        <img src="/images/gallery-02.png" alt="" />
                    </div>
                    <div className="img-holder">
                        <img src="/images/gallery-03.jpg" alt="" />
                    </div>
                    <div className="img-holder">
                        <img src="/images/gallery-04.png" alt="" />
                    </div>
                    <div className="img-holder">
                        <img src="/images/gallery-05.jpg" alt="" />
                    </div>
                    <div className="img-holder">
                        <img src="/images/gallery-06.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="contact-info">
                <h3>Made With 3 By MahmoudImam</h3>
            </div>
        </footer>
    );
}
