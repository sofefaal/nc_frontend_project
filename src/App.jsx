import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import "./App.css";
import SingleArticle from "./Components/SingleArticle";
import { UserProvider } from "./context/UserContext";


function App() {
  return (
    <div>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
