import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthConText } from "../UserConTect";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthConText);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password.length < 6) {
      setError("password should be 6 character or match");
      return;
    }
    if (password !== confirm) {
      setError("your password did not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">SignUp!!!</h1>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">ConfirmPassword</label>
          <input type="password" name="confirm" required />
        </div>
        <input className="btn-submit" type="submit" value="signUp" />
      </form>
      <p>
        Already Have an Account <Link to="/login">LOgin</Link>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
