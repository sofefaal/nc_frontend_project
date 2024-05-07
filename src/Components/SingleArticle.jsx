import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import { getArticleByID } from "../api"
import ArticleCard from "./ArticleCard"

function SingleArticle() {
   
    const [article, setArticle] = useState({})
    const {article_id} = useParams()

    useEffect(() => {
        getArticleByID(article_id)
        .then((response) => {
            setArticle(response.data.article[0])
        }, [article_id])
    })

    return(
        <section className="single-article">
            <ArticleCard article={article}/>
            <p>{article.body}</p>
        </section>
    )

}

export default SingleArticle