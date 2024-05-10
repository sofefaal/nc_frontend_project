import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./icons/Loading";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function FetchAllArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    getAllArticles(topic)
      .then((response) => {
        setLoading(false);
        setArticles(response.data.articles);
      })
      .catch((err) => {
        setErr(true);
      });
  }, [topic]);

  if (err) {
    return (
      <>
      <ErrorPage />
      <p>
        Sorry <s>Reddit</s> Nc News could not find articles
      </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Loading />
        <p className="page-loading">Page loading, please wait...</p>
      </>
    );
  }

  return (
    <section>
      <h2 className="breaking-news">The latest breaking news</h2>
      <div className="article-list">
        {articles.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </div>
    </section>
  );
}

export default FetchAllArticles;
