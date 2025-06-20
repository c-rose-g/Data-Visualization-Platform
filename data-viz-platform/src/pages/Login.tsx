import {useState} from "react";
import { auth, googleProvider } from "../firebase";
import {signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [errorCode, setErrorCode] = useState("")
  
  // sign in with email/password
  const emailLogin = async (e:React.FormEvent) =>{
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/dashboard")
    } catch (e:any) {
      setError(e.message)
      setErrorCode(e.code)
    }
  }

  // sign in with google
  const googleAuthentication = async () =>{
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (e:any) {
      setError(e.message)
    }
  }

  return (
    <div className="">
      <h1>Login</h1>
      <form onClick={emailLogin}>
        <div>
          <label>Email:</label>
          <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          />
          <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          />
          <button type="submit">Login</button>
          <button type="button" onClick={googleAuthentication}>Sign in with Google</button>
          {error && <p>{error}{errorCode}</p>}
        </div>
      </form>
    </div>
  )
}

export default Login
