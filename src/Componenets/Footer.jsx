import React from "react";

export default function Footer() {
    return (
        <footer id="footer">
            <section>
                <form action="" method="post">
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="field" id="message">
                            <label htmlFor="Message">Message</label>
                            <textarea name="Message" id="Message" rows="5" required></textarea>
                        </div>
                        <div className="field">
                            <button type="submit" value="button">SEND MESSAGE</button>
                        </div>
                    </div>
                    
                </form>
            </section>
            <section className="split contact">
                <section className="alt">
                    <h3>Address</h3>
                    <p>
                        1234 Somewhere Road #87257
                        <br />
						Nashville, TN 00000-0000
                        
                    </p>
                </section>
                <section>
                    <h3>Phone</h3>
                    <p>
                        <a href="#">
                            (000) 000-0000
                        </a>
                        </p>
                </section>
                <section>
                    <h3>Email</h3>
                    <p>
                        <a href="#">info@untitled.tld</a>
                    </p>
                </section>
                <section>
                    <h3>Socials</h3>
                    <ul className="icons">
                        <li>
                            <a href="#" class="icon brands alt">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="icon brands alt">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="icon brands alt">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="icon brands alt">
                                <i className="bi bi-github"></i>
                            </a>
                        </li>
                    </ul>
                </section>
            </section>
        </footer>
    );
}