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

export function patchArticleVotesById(article_id, votes) {
  return ncNewsAPI.patch(`/articles/${article_id}`, {inc_votes: votes});
  
}

export function postComments(id, username, comment) {
  return ncNewsAPI.post(`/articles/${id}/comments`, {
    username: username,
    body: comment, 
  })
  .then(({data}) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  })
}

export function deleteComment(comment_id) {
  return ncNewsAPI.delete(`/comments/${comment_id}`)
  .then(({data}) => {
    return data
  })
}