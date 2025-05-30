import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Services/firebase";
import { useNavigate } from "react-router-dom";


//Something simple for just me
export default function Login() {
  const navigate = useNavigate();

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const login = await signInWithPopup(auth, provider);
    console.log("user:", login.user);
    if (login.user) {
      navigate("/");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div className="login-area">
      <button className="login-btn" onClick={login}>
        Login with Google
      </button>
    </div>
  );
}
