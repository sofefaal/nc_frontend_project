import axios from "axios"

const ncNewsAPI = axios.create({
    baseURL: "https://backend-project-m2ru.onrender.com/api"
})

export function getAllArticles() {
    return ncNewsAPI.get("/articles")
}

