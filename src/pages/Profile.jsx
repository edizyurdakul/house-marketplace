import { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaBed, FaBath, FaWifi, FaParking, FaChair } from "react-icons/fa";

function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const [changeDetails, setChangeDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [listings, setListings] = useState(null);
  const { name, email } = formData;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(
        listingsRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );

      const querySnap = await getDocs(q);

      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setIsLoading(false);
    };

    fetchListings();
  }, [auth.currentUser.uid]);

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

  const onDelete = async (listingId) => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      await deleteDoc(doc(db, "listings", listingId));
      const upDatedListings = listings.filter(
        (listing) => listing.id !== listingId
      );
      setListings(upDatedListings);
      toast.error("Deleted listing", {
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
          <h2 className="mb-4 text-xl font-semibold">Your Listings</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {!isLoading && listings?.length > 0 && (
              <>
                {listings.map((listing) => {
                  return (
                    <div
                      key={listing.id}
                      className="relative mx-0 flex h-[100%] flex-col rounded-md ring-1 ring-zinc-200 transition duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-lg"
                    >
                      <div className="relative">
                        <Link
                          to={`/category/${listing.data.type}/${listing.id}`}
                        >
                          <img
                            src={listing.data.imgUrls[0]}
                            alt={listing.data.name}
                            className=" h-auto w-auto rounded-md"
                          />
                        </Link>
                        <p className="absolute bottom-4 left-4 rounded-lg bg-zinc-900  p-1 text-sm uppercase text-zinc-50">
                          {listing.data.type}
                        </p>
                        <button
                          onClick={() => {
                            onDelete(listing.id);
                          }}
                          className="absolute bottom-4 right-4 mt-4  rounded-md bg-red-500 p-1 text-zinc-50 transition duration-200 ease-in-out  hover:-translate-y-1 hover:drop-shadow-md"
                        >
                          Delete Listing
                        </button>
                      </div>
                      <Link
                        key={listing.id}
                        to={`/category/${listing.data.type}/${listing.id}`}
                      >
                        <div className="p-4">
                          <h3 className=" font-medium">{listing.data.name}</h3>
                          <p>{listing.data.location}</p>
                          <p className="w-fit rounded-lg text-sm uppercase text-green-500">
                            ${listing.data.price}
                            {listing.data.type === "rent" && "/Month"}
                          </p>
                          <div className="flex space-x-4">
                            <div className="mt-2 flex items-center">
                              <p className="text-sm">{listing.data.bedrooms}</p>
                              <FaBed className="ml-1" />
                            </div>
                            <div className="mt-2 flex items-center">
                              <p className="text-sm">
                                {listing.data.bathrooms}
                              </p>
                              <FaBath className="ml-1 text-sm" />
                            </div>
                            <div className="mt-2 flex items-center">
                              <p>
                                {listing.data.wifi === true ? (
                                  <>
                                    <FaWifi />
                                  </>
                                ) : (
                                  <>
                                    <FaWifi className="text-zinc-900 opacity-25" />
                                  </>
                                )}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center">
                              <p>
                                {listing.data.furnished === true ? (
                                  <>
                                    <FaChair className="text-sm" />
                                  </>
                                ) : (
                                  <>
                                    <FaChair className="text-zinc-900 opacity-25" />
                                  </>
                                )}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center">
                              <p>
                                {listing.data.parking === true ? (
                                  <>
                                    <FaParking className="text-sm" />
                                  </>
                                ) : (
                                  <>
                                    <FaParking className="text-zinc-900 opacity-25" />
                                  </>
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default Profile;
