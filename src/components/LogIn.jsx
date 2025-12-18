import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth, googleProvider } from "./firebase";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Usuario autenticado:", result.user);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Sesión activa:", user.displayName);
      } else {
        console.log("No hay sesión activa");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Login con Google</h2>
      <button onClick={loginWithGoogle}>
        Iniciar sesión con Google
      </button>

      <button onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default LogIn;

