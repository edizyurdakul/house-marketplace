import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Contact() {
  const [message, setMessage] = useState("");
  const [landlord, setLandlord] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useParams();

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", params.landlordId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
        setIsLoading(false);
      } else {
        toast.error("Could not get landlord data", {
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

    getLandlord();
  }, [params.landlordId]);

  return (
    <main>
      {isLoading ? (
        <div className="my-8 flex justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <h1 className="my-4 text-2xl ">
            Contact <span className="font-bold">{landlord?.name}</span>
          </h1>
          <form className="flex flex-col">
            <label className="mt-4 mb-2">Message</label>
            <textarea
              id="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
              type="text"
              placeholder="Name"
              value={message}
              required
            />
            <a
              href={`mailto:${landlord.email}?Subject=${searchParams.get(
                "listingName"
              )}&body=${message}`}
              className="mt-8 w-fit"
            >
              <button
                type="button"
                className=" rounded-md border-x border-y border-solid border-zinc-900 bg-zinc-900 px-4 py-2 text-slate-50  active:bg-gray-600"
              >
                Send Message
              </button>
            </a>
          </form>
        </>
      )}
    </main>
  );
}

export default Contact;
