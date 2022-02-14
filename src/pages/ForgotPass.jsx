import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Could not send reset link", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <h1 className="mb-4 text-3xl font-semibold">Forgot Password</h1>
      <main>
        <form
          onSubmit={onSubmit}
          className="flex flex-col text-left md:items-center"
        >
          <input
            onChange={onChange}
            type="email"
            id="email"
            placeholder="email"
            className="mb-4 w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
          />

          <button className="w-fit rounded-md border-x border-y border-solid border-zinc-50 bg-zinc-50 px-4 py-2 text-zinc-900 transition duration-200 ease-in-out hover:-translate-y-1 hover:drop-shadow-md active:bg-gray-600">
            Reset Password
          </button>
        </form>
      </main>
    </motion.div>
  );
}

export default ForgotPassword;
