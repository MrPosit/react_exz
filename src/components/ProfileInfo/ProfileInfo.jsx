import style from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          className={style.profile_avatar}
          src="images/images.jpg"
          alt="avatar"
        />
        <button className={style.edit_button}>Edit profile</button>
      </div>
      <p
        className={style.text_style_one}
        style={{ letterSpacing: "-0.252px", margin: "3px 0 0 0" }}
      >
        Арнат
      </p>
      <p
        style={{ color: "#5B7083", letterSpacing: "-0.32px" }}
        className={style.text_style_two}
      >
        @zxc_noir
      </p>
      <p
        style={{
          letterSpacing: "-0.24px",
          margin: "10px 0 0 0",
        }}
        className={style.text_style_two}
      >
        живу в Польше
      </p>
      <div style={{ display: "flex", margin: "10px 0 0 0" }}>
        <img src="images/Location.svg" alt="location" />
        <p
          style={{
            color: "#5B7083",
            letterSpacing: "-0.32px",
            margin: "0 0 0 5px",
          }}
          className={style.text_style_two}
        >
          Казахстан
        </p>
        <img
          src="images/Calendar.svg"
          alt="calendar"
          style={{ margin: "0 0 0 9px" }}
        />
        <p
          style={{
            color: "#5B7083",
            letterSpacing: "-0.24px",
            margin: "0 0 0 6px",
          }}
          className={style.text_style_two}
        >
          Зарегестрировался в ноябре 2022 года
        </p>
      </div>
      <div style={{ display: "flex", margin: "10px 0 0 0" }}>
        <p style={{ color: "#5B7083" }} className={style.text_style_two}>
          <span style={{ color: "black" }} className={style.text_style_three}>
            90
          </span>{" "}
          Following
        </p>
        <p
          className={style.text_style_two}
          style={{ color: "#5B7083", margin: "0 0 0 18px" }}
        >
          <span style={{ color: "black" }} className={style.text_style_three}>
            86
          </span>{" "}
          Followers
        </p>
      </div>
    </>
  );
}
