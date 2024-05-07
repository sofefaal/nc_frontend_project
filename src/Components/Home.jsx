import FetchAllArticles from "./FetchAllArticles"


function Home() {
    return(
        <section>
            <h2>Welcome to Nc News</h2>
            <h3>Spilling the tea on the hottest news ☕</h3>
            <FetchAllArticles />
        </section>
    )
}

export default Home