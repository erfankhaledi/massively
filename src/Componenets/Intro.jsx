import React, { useState, useEffect } from "react";

export default function Intro() {
    // State to track whether the class should be applied
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        // Function to check scroll position
        const handleScroll = () => {
            // Change this value based on when you want to apply the class
            if (window.scrollY > 0) { // Any positive scroll means to add the class
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="intro" className={isHidden ? "hidden" : ""}>
            <h1>
                This is
                <br />
                massively
            </h1>
            <p>
                A free, fully responsive HTML5 + CSS3 site template designed by
                <a href="#"> @ajlkn </a>
                for
                <a href="#"> HTML5 UP</a>
                <br />
                and released for free under the
                <a href='#'> Creative Commons license</a>.
            </p>
            <ul className="actions">
                <li>
                    <a href="#" className="button icon solid solo fa-arrow-down scrolly">
                         <i className="bi bi-arrow-down"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}