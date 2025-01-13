import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./ProfileLink.module.css";

export default function ProfileLink() {
    const [profileLinkHover, setProfileLinkHover] = useState(false);

    return (
        <Link
            className={style.navbar_link}
            to="/profile"
            onMouseEnter={() => setProfileLinkHover(true)}
            onMouseLeave={() => setProfileLinkHover(false)}
        >
            <img
                src={
                    profileLinkHover
                        ? "images/profile-blue.svg"
                        : "images/profile-black.svg"
                }
                alt="profile-link"
            />
            <p style={{ color: profileLinkHover ? "#1DA1F2" : "black" }}>
                Profile
            </p>
        </Link>
    );
}
