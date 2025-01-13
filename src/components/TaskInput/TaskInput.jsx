import { usePosts } from "../../store/usePosts";
import style from "./TaskInput.module.css";

export default function TaskInput({
    textareaTaskRef,
    textareaValue,
    gapActive,
    setTextareaValue,
    setGapActive,
}) {
    const { push } = usePosts();

    const sharePost = () => {
        setTextareaValue("");
        setGapActive(true);
        const formattedTime = `${new Date()
            .getHours()
            .toString()
            .padStart(2, "0")}:${new Date()
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;
        push({
            publishedTime: formattedTime,
            postText: textareaValue,
            postID: Math.random().toString(36),
        });
    };

    const handleTextareaChange = (event) => {
        const { value } = event.target;
        setTextareaValue(value);
    };

    return (
        <div className={style.task_input}>
            <img src="images/images.jpg" alt="user-avatar" />
            <div className={style.task_input_action}>
                <textarea
                    ref={textareaTaskRef}
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    rows={gapActive ? 2 : 2}
                    placeholder="Оставите свой комментарий?"
                />
                <button onClick={sharePost} disabled={!textareaValue}>
                    Tweet
                </button>
            </div>
        </div>
    );
}
