import {useEffect, useState} from "react"
import { getArticleComments } from "../api"
import {useParams} from "react-router-dom"

function DisplayAllComments() {
    
    const [comments, setComments] = useState([])
    const {article_id} = useParams()
    
    useEffect(() => {
        getArticleComments(article_id)
        .then((response) => {
            setComments(response.data.comments)
            console.log(response.data.comments);
        })

    }, [])

    return(
        <section className="all-comments-container">
            <h3>Comments section:</h3>
            {comments.map((comment) => {
             
            return (
              <div key={comment.comment_id}>
                <h4>{comment.author}</h4>
                <p className="comments-created-at">🕛 {comment.created_at}</p>
                <p>{comment.body}</p>

                <table>
                  <tbody>
                    <tr>
                      <td>Likes: {comment.votes >= 0 ? comment.votes : 0}</td>
                      <td>dislikes: {comment.votes < 0 ? comment.votes : 0}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );    
            })}
        </section>
    )

}

export default DisplayAllComments