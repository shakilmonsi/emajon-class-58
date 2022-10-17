import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthConText } from "../UserConTect";
import "./Login.css";
const Login = () => {
  const { signIn } = useContext(AuthConText);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="form-container">
      <h1 className="form-title">login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input type="password" name="password" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        New to ema john<Link to="/signUp">Create a new Account</Link>
      </p>
    </div>
  );
};

export default Login;
