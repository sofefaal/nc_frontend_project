import {useState} from "react"
import { patchArticleVotesById } from "../api"
import ThumbsDown from "./icons/ThumbsDown"
import ThumbsUp from "./icons/ThumbsUp"

function UserVotes({article_id, votes}) {

const [userVote, setUserVotes] = useState(0)
console.log(article_id)


function increaseVotes() {
    setUserVotes((voteChange) => voteChange + 1)
    patchArticleVotesById(article_id, 1)
}

function decreaseVotes() {
    setUserVotes((voteChange) => voteChange -1)
    patchArticleVotesById(article_id, -1)
}

return(
    <>
    <p>{votes + userVote} Vote</p>
    <button disabled={userVote === +1} onClick={increaseVotes}> <ThumbsUp/> </button>
    <button disabled={userVote === -1} onClick={decreaseVotes}> <ThumbsDown/> </button>
    </>
)
}

export default UserVotes