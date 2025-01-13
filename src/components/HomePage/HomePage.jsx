import React, { useState, useRef, useEffect } from "react";
import { usePosts } from "../../store/usePosts";
import Post from "../Post/Post";
import TaskInput from "../TaskInput/TaskInput";
import style from "./HomePage.module.css";

export default function HomePage() {
  const textareaTaskRef = useRef(null);
  const textareaPostRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [gapActive, setGapActive] = useState(false);
  const { posts } = usePosts();

  useEffect(() => {
    console.log(posts);
    adjustTextareaHeight();
  }, [posts, textareaValue]);

  const adjustTextareaHeight = () => {
    const adjustRef = (ref) => {
      if (ref.current) {
        ref.current.style.height = "auto";
        ref.current.style.height = `${ref.current.scrollHeight}px`;
      }
    };

    adjustRef(textareaTaskRef);
    adjustRef(textareaPostRef);
  };

  return (
    <div style={{ width: "100%" }}>
      <TaskInput
        textareaTaskRef={textareaTaskRef}
        textareaValue={textareaValue}
        gapActive={gapActive}
        setGapActive={setGapActive}
        setTextareaValue={setTextareaValue}
      />
      <div
        style={{ display: gapActive ? "block" : "none" }}
        className={style.gap}
      ></div>
      {posts.map((post) => (
        <Post
          key={post.postID}
          textareaPostRef={textareaPostRef}
          post={post}
        />
      ))}
    </div>
  );
}