import React from "react";

export default function Navbar() {
    return (
        <nav id="nav">
            <ul className="links">
                <li className="active">
                    <a href="#">
                        This is Massively
                    </a>
                </li>
                <li>
                    <a href="#">
                        Generic Page
                    </a>
                </li>
                <li>
                    <a href="#">
                        Elements Reference
                    </a>
                </li>
            </ul>
            <ul className="icons">
                {/* Twitter */}
                <li>
                    <a href="#" className="icon brands">
                        <i className="bi bi-twitter"></i>
                    </a>
                </li>
                {/* FaceBook */}
                <li>
                    <a href="#" className="icon brands">
                        <i className="bi bi-facebook"></i>
                    </a>
                </li>
                {/* Instagram */}
                <li>
                    <a href="#" className="icon brands">
                        <i className="bi bi-instagram"></i>
                    </a>
                </li>
                {/* Github */}
                <li>
                    <a href="#" className="icon brands">
                        <i className="bi bi-github"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}