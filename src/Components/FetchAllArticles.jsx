import {useEffect, useState} from "react"
import { getAllArticles } from "../api"
import ArticleCard from "./ArticleCard"


function FetchAllArticles() {
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [err, setErr] = useState(false)

useEffect(() => {
    getAllArticles()
    .then((response) => {
        setLoading(false)
        setArticles(response.data.articles)
    })
    .catch((err) => {
        setErr(true)
    })
}, [])

if(err) {
    return <p>Sorry <s>Reddit</s>Nc News could not find articles</p>
}

if(loading) {
    return <p>Page loading, please wait...</p>
}

return(
    <section>
        <h2>The latest breaking news</h2>
        <div className="article-list" >
            {articles.map((article) => {
                return <ArticleCard key={article.id} article={article}/>
               
            })}
        </div>
    </section>
)

}

export default FetchAllArticles