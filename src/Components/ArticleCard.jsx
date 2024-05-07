import { Link } from "react-router-dom";

function ArticleCard({ article }) {

  return (
    <section className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
        <img src={article.article_img_url} alt={article.title} />
      </Link>
      <ul>
        <li>Author: {article.author}</li>
        <li>Topic: {article.topic} </li>
        <li>Date: {article.created_at}</li>
        <li>Likes: {article.votes}</li>
        <li>Comments: {article.comment_count}</li>
      </ul>
    </section>
  );
}

export default ArticleCard;
