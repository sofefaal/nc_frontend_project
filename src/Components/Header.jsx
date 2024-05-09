import SignInUser from "./SignInUser"

function Header() {
    return(
        <section>
            <div className="header">
        <h1>Nc News</h1>
        </div>
        <div>
        <SignInUser />
        </div>
        </section>
    )

}

export default Header