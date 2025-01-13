import ProfileInfo from "../ProfileInfo/ProfileInfo";
import style from "./ProfilePage.module.css";

export default function ProfilePage() {
    return (
        <div className={style.profile}>
            <img
                className={style.background}
                src="images/backg.jpeg"
                alt="background"
            />
            <ProfileInfo />
        </div>
    );
}