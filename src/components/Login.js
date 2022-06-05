import React from 'react';
import { useNavigate } from "react-router-dom"

function Login(props) {

    const navigate = useNavigate()
    console.log("props", props.users);

    function logIn() {

        const user = props.users.find((value) => {
            return value.username === props.loginFormular.username &&
                value.password === props.loginFormular.password
        })
        if (user) {
            props.admin.current = user
            props.setLoginStatus(true)
            navigate("/React-My-movie/")
        } else {
            props.admin.current = null
            props.fomularLeeren()
            props.setLoginStatus(false)
            navigate("/React-My-movie/")
        }

    }




    return (
        <div className="container">

            <form>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">
                        Username:
                        <div className="col-sm-10">
                            <input type="text" name="username"
                                value={props.loginFormular.username}
                                onChange={props.loginEingeben}
                            />
                        </div>
                    </label>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">
                        Passwort:
                        <input type="password" name="passwort"
                            value={props.loginFormular.passwort}
                            onChange={props.loginEingeben}
                        />
                    </label>
                    <div>
                        <button type="button" onClick={logIn}
                        >Anmelden</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default Login;