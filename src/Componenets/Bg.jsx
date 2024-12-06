import React, { useState, useEffect } from "react";

export default function Bg() {
    // Defining state to track whether the class should be applied
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to handle scroll events
    useEffect(() => {
        // Function to check scroll position
        const handleScroll = () => {
            // Change this value based on when you want to apply the class
            if (window.scrollY > 200) { // Adjust the threshold as necessary
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="bg fixed"></div>

            <a 
                href="#" 
                id="navPanelToggle" 
                className={isScrolled ? "alt" : ""}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                Menu
            </a>
        </>
    );
}