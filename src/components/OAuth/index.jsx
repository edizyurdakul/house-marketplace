import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  const navigate = useNavigate();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {}
    toast.error("Could not authorize with Google", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <button onClick={onGoogleClick} className="mx-auto h-8 w-8 ">
      <FcGoogle className=" h-[100%] w-[100%] rounded-md shadow-md hover:bg-zinc-700 hover:shadow-lg" />
    </button>
  );
}

export default OAuth;
