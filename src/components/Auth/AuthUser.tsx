"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Services/firebase";
import { useRouter } from "next/navigation";

//Something simple for just me
export default function Login() {
  const router = useRouter();

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const login = await signInWithPopup(auth, provider);
    console.log("user:", login.user);
    if (login.user) {
      router.push("/");
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
