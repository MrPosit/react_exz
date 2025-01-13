
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomeLink.module.css";

export default function CustomLink() {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const imgSrc = isHovered ? "images/home-blue.svg" : "images/home-black.svg";
    const textColor = isHovered ? "#1DA1F2" : "black";

    return (
        <Link
            className={styles.home_link}
            to="/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={imgSrc} alt="home-link" />
            <p style={{ color: textColor }}>Home</p>
        </Link>
    );
}
