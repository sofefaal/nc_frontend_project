import {useState} from "react"

function ArticleCard({article}) {
    return(
        <section>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt={article.title} />
            <ul>
                <li>Author: {article.author}</li>
                <li>Topic: {article.topic} </li>
                <li>Date: {article.created_at}</li>
                <li>Likes: {article.votes}</li>
                <li>Comments: {article.comment_count}</li>
            </ul>
        </section>
    )

}

export default ArticleCard