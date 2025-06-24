import { useState, useEffect } from "react";
import style from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Арнат");
  const [bio, setBio] = useState("живу в Польше");

  useEffect(() => {
    const storedName = localStorage.getItem("profile_name");
    const storedBio = localStorage.getItem("profile_bio");

    if (storedName) setName(storedName);
    if (storedBio) setBio(storedBio);
  }, []);

  const handleSave = () => {
    localStorage.setItem("profile_name", name);
    localStorage.setItem("profile_bio", bio);
    setIsEditing(false);
  };

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
        <button
          className={style.edit_button}
          onClick={() => {
            if (isEditing) {
              handleSave(); 
            } else {
              setIsEditing(true); 
            }
          }}
        >
          {isEditing ? "Save" : "Edit profile"}
        </button>
      </div>

      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={style.text_style_one}
            style={{
              letterSpacing: "-0.252px",
              margin: "3px 0 0 0",
              width: "100%",
            }}
          />
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className={style.text_style_two}
            style={{
              letterSpacing: "-0.24px",
              margin: "10px 0 0 0",
              width: "100%",
            }}
          />
        </>
      ) : (
        <>
          <p
            className={style.text_style_one}
            style={{ letterSpacing: "-0.252px", margin: "3px 0 0 0" }}
          >
            {name}
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
            {bio}
          </p>
        </>
      )}

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
          Зарегистрировался в ноябре 2022 года
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
