import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import './App.css'
import SingleArticle from './Components/SingleArticle'

function App() {
  

  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  )
}

export default App
