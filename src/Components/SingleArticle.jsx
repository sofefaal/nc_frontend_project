import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import { getArticleByID } from "../api"
import DisplayAllComments from "./DisplayAllComments"
import UserVotes from "./UserVotes"



function SingleArticle() {
   
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getArticleByID(article_id)
          .then((response) => {
            setArticle(response.data.article[0]);
          })
          .catch((err) => {
            setErr(true);
          });
    }, [])

    if (err) {
      return (
        <p>
          Sorry <s>Reddit</s> we mean Nc News could not find the article
        </p>
      );
    }

    if (loading) {
      return <p>Page loading, please wait...</p>;
    }

    return (
      <section className="single-article">
        <h2 className="single-article-title">{article.title}</h2>
        <img className="article-image" src={article.article_img_url} alt={article.title} />
        <div>
          <h3>By {article.author}</h3>
          <h4>Nc News</h4>
        <p>🕛 {new Date(article.created_at).toLocaleDateString()}</p>
        </div>
        <br></br>
        <p>{article.body}</p>
        <br></br>
        <div>
          <UserVotes article_id={article_id} votes={article.votes} />
        </div>
        <DisplayAllComments comments={comments} />
      </section>
    );

}

export default SingleArticle