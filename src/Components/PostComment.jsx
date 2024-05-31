import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { getArticleComments, postComments } from "../api";
import { toast } from "react-toastify";

function PostComment({ article_id, setComments }) {
  const [postComment, setPostComment] = useState("");
  const userInfo = useContext(UserContext);
  const username = userInfo.userLogin.username;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      return toast.error("You must be signed in to post a new comment");
    }
    postComments(article_id, username, postComment)
      .then(() => {
        getArticleComments(article_id).then((response) => {
          setComments(response.data.comments);
        });
        setPostComment("");
        toast.success("Yay! you posted a new comment 😊");
      })
      .catch((err) => {
        toast.error("Error posting comment. Please try again later.");
      });
  };

  return (
    <form className="comment-box" method="post" onSubmit={handleSubmit}>
      <label>
        <textarea
          className="postComment"
          defaultValue={postComment}
          placeholder="Type your comment here..."
          onChange={(e) => setPostComment(e.target.value)}
          rows={4}
          cols={40}
        />
      </label>
      <button className="submit-button"type="submit">Submit Comment</button>
    </form>
  );
}

export default PostComment;
