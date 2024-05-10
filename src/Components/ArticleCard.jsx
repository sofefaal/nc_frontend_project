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
    </section>
  );
}

export default ArticleCard;
