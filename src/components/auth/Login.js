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
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <div className="login-container">
                        <h1>Film to Fridge</h1>
                    <h2>Please sign in</h2>
                    <fieldset className="login-fieldset">
                        <label htmlFor="inputUsername"> Username </label>
                        <input type="username"
                            value={username}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Username"
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
        </main>
    )
}

