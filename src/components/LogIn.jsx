import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth, googleProvider } from "./firebase";

function LogIn() {
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Usuario autenticado:", result.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
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

