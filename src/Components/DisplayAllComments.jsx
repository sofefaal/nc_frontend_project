import {useEffect, useState, useContext} from "react"
import { getArticleComments, deleteComment } from "../api"
import {useParams} from "react-router-dom"
import PostComment from "./PostComment"
import { UserContext } from "../context/UserContext"
import { toast } from "react-toastify";

function DisplayAllComments() {
    
    const [comments, setComments] = useState([])
    const {article_id} = useParams()
    const userInfo = useContext(UserContext)
    const username = userInfo.userLogin.username 
    const [userDeleteComment, setUserDeleteComment] = useState(false)
    
    useEffect(() => {
        getArticleComments(article_id)
        .then((response) => {
            setComments(response.data.comments) 
        })

    }, [article_id, userDeleteComment])

    function deleteCommentById(commentId) {
      const commentToDelete = comments.find(comment => comment.comment_id === commentId)
      if(commentToDelete.author !== username) {
        return toast.error("You cannot delete this comment!")
      }
 
      setComments(comments.filter((comment) => comment.comment_id !== commentId))
      toast.success("Comment deleted")
    }

    return (
      <section className="all-comments-container">
        <PostComment article_id={article_id} setComments={setComments} />
        <h3>Comments section:</h3>
        {comments.map((comment) => {
          return (
            <div className="comment-boxes" key={comment.comment_id}>
              <h4>{comment.author}</h4>
              <p className="comments-created-at">
                🕛 Posted {new Date(comment.created_at).toLocaleDateString()}
              </p>
              <p>{comment.body}</p>

              <table>
                <tbody>
                  <tr>
                    <td>Likes: {comment.votes >= 0 ? comment.votes : 0}</td>
                    <td>dislikes: {comment.votes < 0 ? comment.votes : 0}</td>
                  </tr>
                </tbody>
              </table>
              {comment.author === username && (
                <button onClick={() => deleteCommentById(comment.comment_id)}>Delete❌</button>
              )}
            </div>
          );
        })}
      </section>
    );

}

export default DisplayAllComments