
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import * as client from "./client";

import "./styles.css";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Signin = async () => {
    const user = await client.Signin(credentials);

    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div id="wd-Signin-screen" className="p-3">
      <h3>Sign in</h3>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-1"
        defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}

      />
      <br />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-1"
        defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}

      />
      <br />
      <button onClick={Signin} id="wd-Signin-btn" className="btn btn-primary w-100" > Sign in </button>

      <br />
      <Link id="wd-Signup-link" to="/Kanbas/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
