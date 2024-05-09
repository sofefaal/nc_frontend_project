import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: 'https://backend-project-m2ru.onrender.com/api',
});

export function getAllArticles() {
  return ncNewsAPI.get('/articles');
}

export function getArticleByID(article_id) {
  return ncNewsAPI.get(`/articles/${article_id}`);
}

export function getArticleComments(article_id) {
    return ncNewsAPI.get(`/articles/${article_id}/comments`)
}

export function getAllUsers() {
  return ncNewsAPI.get('/users')
}