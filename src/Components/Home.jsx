import FetchAllArticles from "./FetchAllArticles"


function Home() {
    return(
        <section>
            <h2 className="welcome">Welcome to Nc News</h2>
            <h3 className="tea">Spilling the tea on the hottest news ☕</h3>
            <FetchAllArticles />
        </section>
    )
}

export default Home