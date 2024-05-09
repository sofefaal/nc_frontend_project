import { useState, useEffect, useContext } from "react";
import { getAllUsers } from "../api";
import { UserContext } from "../context/UserContext";
import User from "./icons/User";

function SignInUser() {
  const [selectedUser, setSelectedUsers] = useState(null);
  const { userLogin, setUserLogin } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSelectUser = () => {
    if (!selectedUser) return
    setUserLogin(selectedUser);
    setIsLoggedIn(true);
  };
  
  useEffect(() => {
      getAllUsers().then((response) => {
          setSelectedUsers(response.data.users[3]);
        });

    }, []);
    
  console.log(selectedUser);
  return (
    <section>
      <button onClick={handleSelectUser} disabled={isLoggedIn}>
        {isLoggedIn ? (
          <>
            <img
              src={selectedUser?.avatar_url}
              alt="user avatar character"
              className="user-avatar"
            />
            <div className="username">{selectedUser?.username}</div>
          </>
        ) : (
          <>
            <User />
            <span>Sign In</span>
          </>
        )}
      </button>
    </section>
  );
}

export default SignInUser;
