import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';

const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useAuth();

  const location = useLocation();

  const emailRef = useRef();
  const errRef = useRef();

  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  
  const[emailFocus, setEmailFocus] = useState(false);
  const[success, setSuccess]=useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      //const roles = response?.data?.roles;
      setAuth({ email, pwd, accessToken });

      setPwd("");
      setEmail("");
      setSuccess(true);

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <div>
          <h1>You are successfully logged in!</h1>
          <br/>
          <p>
            Go to <Link to="/">your dashboard</Link> to upload your files and see the analysis result.
          </p>
        </div>
      ): (
        
    <div>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          ref={emailRef}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={()=>setEmailFocus(true)}
          onBlur={()=>setEmailFocus(false)}
          value={email}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <br/>
        <Button variant="contained" onClick={handleSubmit}>Sign In</Button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </div>
  )}</>)
};

export default Login;
