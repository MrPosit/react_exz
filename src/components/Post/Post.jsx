import style from "./Post.module.css";

export default function Post({ textareaPostRef, post }) {
  return (
    <div className={style.post}>
      <img src="images/images.jpg" alt="user-avatar" />
      <div className={style.post_inner}>
        <p>
          Арнат <span>@zxc_noir · {post.publishedTime}</span>
        </p>
        <textarea ref={textareaPostRef} value={post.postText} readOnly />
      </div>
    </div>
  );
}