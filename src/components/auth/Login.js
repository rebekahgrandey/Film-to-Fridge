import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [username, set] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?username=${username}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("film_user", JSON.stringify({
                        id: user.id
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <div className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <div className="login-container">
                        <img src="/images/theater.svg" className="login-icon"/><img src="/images/right-arrow.svg" className="login-icon"/><img src="/images/fridge.svg" className="login-icon"/>
                        <h1 className="login-title">Film to Fridge</h1>
                    <h2 className="login-subhead">Login Required</h2>
                    <fieldset className="login-fieldset">
                        
                        <input type="username"
                            value={username}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Enter Username"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button className="btn-login" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                        </div>
                </form>
            </section>
            
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </div>
    )
}

