import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import OAuth from "../components/OAuth";

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredentials.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad user credentials", {
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
      <div className="relative grid min-h-[100%] items-center justify-center rounded-md bg-zinc-900 lg:h-[100%]">
        <div className="relative px-4 py-4 text-left text-white md:px-8 md:py-8 md:text-center">
          <h1 className="mb-4 text-3xl font-semibold md:mx-auto md:w-[75%] md:text-5xl">
            Find the place to live your dreams easily here
          </h1>
          <p className="text-md mb-4 md:mx-auto md:w-[50%]">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
          <p className="text-purple-400">Demo account details:</p>
          <p>
            <span className="select-none">email: </span>
            <span className="selection:bg-purple-500 selection:text-white">
              demo_account@gmail.com
            </span>
          </p>
          <p>
            <span className="select-none">pass: </span>
            <span className="selection:bg-purple-500 selection:text-white">
              demoaccount
            </span>
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col text-left md:items-center"
          >
            <label className="mt-4">email</label>
            <input
              onChange={onChange}
              type="email"
              id="email"
              placeholder="email"
              className="mb-4 w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-transparent focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
            />
            <label>Password</label>
            <input
              onChange={onChange}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="password"
              className="w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-transparent focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
            />
            <div className="my-4 flex justify-between">
              <p
                className="w-fit cursor-pointer md:pr-8"
                onClick={() => {
                  setShowPassword((prevState) => !prevState);
                }}
              >
                {showPassword ? "Show password" : "Hide Password"}
              </p>
              <Link to="/forgot">Forgot Password</Link>
            </div>
            <button className="w-fit rounded-md border-x border-y border-solid border-zinc-50 bg-zinc-50 px-4 py-2 text-zinc-900 transition duration-200 ease-in-out hover:-translate-y-1 hover:drop-shadow-md active:bg-gray-600">
              Sign In
            </button>
          </form>
          <p className="mt-8 mb-2 text-center">Sign In With</p>
          <div className="my-4">
            <OAuth />
          </div>
          <Link className="my-4" to="/signup">
            Don't have an account? Sign up instead
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default SignInPage;
