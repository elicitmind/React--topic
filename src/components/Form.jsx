import React from "react"
import Input from "./Input.jsx"

function LoginForm(props) {
  return (
    <div>
      <h1>{props.isRegistered ? "Login" : "Register"}</h1>
      <form className="form">
        <Input
          type="text"
          placeholder="Username"
        />
        <Input
          type="password"
          placeholder="Password"
        />
        {!props.isRegistered && <Input
        type="Password" placeholder="Confirm Password"
        />}
        <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
      </form>
    </div>
  )
}

export default LoginForm