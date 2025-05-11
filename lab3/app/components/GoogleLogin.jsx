import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../lib/firebase";

export default function GoogleLogin() {
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/");
        } catch (error) {
            alert("Błąd logowania: " + error.message);
            navigate("/login");
        }
    };

    return (
        <button
        onClick={handleLogin}
        className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        >
        Zaloguj przez Google
        </button>
    );
}
