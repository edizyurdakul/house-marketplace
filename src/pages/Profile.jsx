import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const [changeDetails, setChangeDetails] = useState(false);

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogOut = () => {
    auth.signOut();
    navigate("/");
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, { displayName: name });
      }

      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        name,
      });
    } catch (error) {
      toast.error("Could not update profile details", {
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

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="py-8"
    >
      <header className="clear-both rounded-md bg-zinc-900 py-8 px-4 text-zinc-50">
        <h1 className="text-2xl">
          Welcome back! <span className="font-semibold">{name}</span>
        </h1>
        <div className="mt-4 flex justify-between">
          <Link to="/create-listing">
            <button className="w-fit rounded-md border-x border-y border-solid border-zinc-200 px-2 py-1 text-sm transition duration-200 ease-in-out  hover:-translate-y-1 hover:drop-shadow-md">
              Create Listing
            </button>
          </Link>
          <button
            type="button"
            className="w-fit rounded-md border-x border-y border-solid border-zinc-200 px-2 py-1 text-sm transition duration-200 ease-in-out  hover:-translate-y-1 hover:drop-shadow-md"
            onClick={onLogOut}
          >
            Log Out
          </button>
        </div>
      </header>
      <main>
        <section className="my-4  py-8">
          <div className=" mb-4 flex content-center items-center justify-between">
            <h2 className="text-xl font-semibold">Profile Details</h2>
            <p
              className=" cursor-pointer select-none rounded-md border-x border-y border-solid border-zinc-900 bg-zinc-900 px-2 py-1 text-sm text-zinc-50 transition duration-200 ease-in-out  hover:-translate-y-1 hover:drop-shadow-md"
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prev) => !prev);
              }}
            >
              {changeDetails ? "done" : "change"}
            </p>
          </div>
          <div>
            <form className="flex flex-col">
              <label>Name</label>
              <input
                id="name"
                value={name}
                onChange={onChange}
                disabled={!changeDetails}
                className="mb-4 w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-transparent focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
              />
              <label>Email</label>
              <input
                id="email"
                value={email}
                disabled={true}
                className="mb-4 w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-transparent focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
              />
            </form>
          </div>
        </section>

        <section className="my-4 py-8">
          <h2 className="text-xl font-semibold">Your Listings</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Todo Listings */}
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default Profile;
