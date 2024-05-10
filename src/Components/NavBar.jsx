import { useState, useEffect } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";
import Loading from "./icons/Loading";

function NavBar() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    getTopics()
      .then((response) => {
        setLoading(false);
        setTopics(response.data.topics);
      })
      .catch((err) => {
        setErr(true);
      });
  }, []);

  if (err) {
    return <p>Sorry, topic not found. Please try again.</p>;
  }

  return (
    <>
      <nav className="navbar-container-full-bleed">
        <ul className="navbar-list">
          <li className="navbar-options">
            <Link to="/">Home</Link>
          </li>
          {topics.map(({ slug }) => {
            return (
              <li className="navbar-options">
                <Link to={`/${slug}`}>
                  {slug.charAt(0).toUpperCase() + slug.slice(1)}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
