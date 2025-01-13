import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import HomeLink from "../HomeLink/HomeLink";
import ProfileLink from "../ProfileLink/ProfileLink";

export default function Navbar() {
    return (
        <div className={style.navbar}>
            <img
                src="images/twiiter-logo.svg"
                className={style.navbar_logo}
                alt="twitter-logo"
            />
            <ul>
                <li style={{ margin: "15px 0 0 10px" }}>
                    <HomeLink />
                </li>
                <li style={{ margin: "30px 0 0 10px" }}>
                    <ProfileLink />
                </li>
            </ul>
            <div style={{ margin: "30px 0 0 0" }}>
                <Link to="/">
                    <button className={style.navbar_button}>Tweet</button>
                </Link>
            </div>
        </div>
    );
}