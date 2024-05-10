import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import "./App.css";
import SingleArticle from "./Components/SingleArticle";
import { UserProvider } from "./context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/NavBar";
import FetchAllArticles from "./Components/FetchAllArticles";

function App() {
  return (
    <div>
      <ToastContainer />
      <UserProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/:topic" element={<FetchAllArticles />} />
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
