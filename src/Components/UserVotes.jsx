import {useState, useContext} from "react"
import { patchArticleVotesById } from "../api"
import ThumbsDown from "./icons/ThumbsDown"
import ThumbsUp from "./icons/ThumbsUp"
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

function UserVotes({article_id, votes}) {

const [userVote, setUserVotes] = useState(0)
const userInfo = useContext(UserContext);
const isLoggedIn = userInfo.userLogin.username !== null;



function increaseVotes() {
    if(!isLoggedIn) {
        return toast.error('You must be signed in to vote')
    }
    setUserVotes((voteChange) => voteChange + 1)
    patchArticleVotesById(article_id, 1)
    toast.success('Thank you for your vote')
}

function decreaseVotes() {
    if (!isLoggedIn) {
        return toast.error("You must be signed in to vote");
    }
    setUserVotes((voteChange) => voteChange -1)
    patchArticleVotesById(article_id, -1)
    toast.success("Thank you for your vote");

}

return (
  <>
    <p>Votes: {votes + userVote} </p>
    <button
      className="vote-button"
      disabled={userVote === +1}
      onClick={increaseVotes}
    >
      {" "}
      <ThumbsUp />{" "}
    </button>
    <button
      className="vote-button"
      disabled={userVote === -1}
      onClick={decreaseVotes}
    >
      {" "}
      <ThumbsDown />{" "}
    </button>
  </>
);
}

export default UserVotes