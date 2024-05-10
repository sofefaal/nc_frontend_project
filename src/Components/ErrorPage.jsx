import {useState, useEffect} from "react"
import ErrorIcon from "../Components/icons/ErrorIcon"
import { Link } from "react-router-dom";


function ErrorPage() {

    return (
      <section>
        <h1 className="error-message">
          Oh no! The requested page doesn't exist or you don't have access
          to it.
        </h1>
        <ErrorIcon />
        <Link to="/"
        >
          <h2 className="error-send-homepage">Go to homepage</h2>
        </Link>
      </section>
    );
}

export default ErrorPage