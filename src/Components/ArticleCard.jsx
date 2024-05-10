import { Link } from "react-router-dom";

function ArticleCard({ article }) {

  return (
    <section className="article-card">
      <div className="article-container">
      <Link to={`/articles/${article.article_id}`}>
        <img src={article.article_img_url} alt={article.title} />
        <h3>{article.title}</h3>
      </Link>
      </div>
      {/* <ul>
        <li>Author: {article.author}</li>
        <li>Topic: {article.topic} </li>
        <li>Date: {new Date(article.created_at).toLocaleDateString()}</li>
        <li>Likes: {article.votes}</li>
        <li>Comments: {article.comment_count}</li>
      </ul> */}
    </section>
  );
}

export default ArticleCard;
