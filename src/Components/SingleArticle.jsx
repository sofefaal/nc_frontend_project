import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import { getArticleByID } from "../api"
import DisplayAllComments from "./DisplayAllComments"


function SingleArticle() {
   
    const [article, setArticle] = useState({})
    const {article_id} = useParams()

    useEffect(() => {
        getArticleByID(article_id)
        .then((response) => {
            setArticle(response.data.article[0])
            // console.log(response.data.article[0])
        })
    }, [])

    return (
      <section className="single-article">
        {/* <ArticleCard article={article}/> */}
        <h2>{article.title}</h2>
        <p>🕛 {new Date(article.created_at).toLocaleDateString()}</p>
        <img src={article.article_img_url} alt={article.title} />
        <div>
          <h3>By {article.author}</h3>
          <p>Nc News</p>
        </div>
        <p>{article.body}</p>
        <div>
          <p>Likes: {article.votes}</p>
        </div>
        <DisplayAllComments />
      </section>
    );

}

export default SingleArticle