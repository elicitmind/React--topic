import React from "react"
import Input from "./Input.jsx"

function LoginForm() {
  return (
    <div>
      <h1>Login</h1>
      <form className="form">
        <Input
          type="text"
          placeholder="Username"
        />
        <Input
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm