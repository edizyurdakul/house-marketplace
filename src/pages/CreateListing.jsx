import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "../firebase.config";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

function CreateListing() {
  const [geolocationEnabled, setGeolocationEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    wifi: false,
    furnished: false,
    address: "",
    price: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    wifi,
    furnished,
    address,
    price,
    images,
    latitude,
    longitude,
  } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate("/signin");
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  if (isLoading) {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="my-8 flex justify-center"
      >
        <Spinner />
      </motion.div>
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    let geolocation = {};
    let location;

    if (geolocationEnabled) {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GEOCODE_API_KEY}`
      );

      const data = await response.json();

      geolocation.lat = data.results[0]?.geometry.location.lat ?? 0;
      geolocation.lng = data.results[0]?.geometry.location.lng ?? 0;

      location =
        data.status === "ZERO_RESULTS"
          ? undefined
          : data.results[0]?.formatted_address;

      if (location === undefined || location.includes("undefined")) {
        setIsLoading(false);
        toast.error("Please enter a correct address");
        return;
      }
    } else {
      geolocation.lat = Number(latitude);
      geolocation.lng = Number(longitude);
    }
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, "images/" + fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      setIsLoading(false);
      toast.error("Something went wrong with uploading images", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });

    const formDataCopy = {
      ...formData,
      imgUrls,
      geolocation,
      createdAt: serverTimestamp(),
    };

    delete formDataCopy.images;
    delete formDataCopy.address;
    location && (formDataCopy.location = location);

    const docRef = await addDoc(collection(db, "listings"), formDataCopy);

    console.log(formDataCopy);
    toast.success("Listing created", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate(`/category/${formDataCopy.type}/${docRef.id}`);
    setIsLoading(false);
  };

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }

    // Text/Booleans/Numbers
    if (!e.target.files || !e.target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="py-8"
    >
      <header>
        <h1 className="text-4xl font-semibold">Create Listing</h1>
      </header>
      <main>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <label className="formLabel">Sell / Rent</label>
          <div className="formButtons">
            <button
              type="button"
              className={
                type === "sale"
                  ? " border-x border-y border-solid border-zinc-900 bg-zinc-900 px-4 py-2 text-slate-50  active:bg-gray-600"
                  : "mt-4 w-fit  border-x border-y border-solid border-zinc-300 bg-zinc-200 px-4 py-2 text-zinc-900  active:bg-gray-600"
              }
              id="type"
              value="sale"
              onClick={onMutate}
            >
              Sell
            </button>
            <button
              type="button"
              className={
                type === "rent"
                  ? " border-x border-y border-solid border-zinc-900 bg-zinc-900 px-4 py-2 text-slate-50  active:bg-gray-600"
                  : "mt-4 w-fit border-x border-y border-solid border-zinc-300 bg-zinc-200 px-4 py-2 text-zinc-900 active:bg-gray-600"
              }
              id="type"
              value="rent"
              onClick={onMutate}
            >
              Rent
            </button>
          </div>
          <label className="mt-4 mb-2">Name</label>
          <input
            id="name"
            onChange={onMutate}
            className="w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
            type="text"
            placeholder="Name"
            value={name}
            required
          />
          <label className="mt-4 mb-2">Bedrooms</label>
          <input
            id="bedrooms"
            onChange={onMutate}
            className="w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
            type="text"
            placeholder="Amount of bedrooms"
            value={bedrooms}
            required
          />
          <label className="mt-4 mb-2">Bathrooms</label>
          <input
            id="bathrooms"
            onChange={onMutate}
            className="w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
            type="number"
            placeholder="Amount of bathrooms"
            value={bathrooms}
            required
          />
          <label className="mt-4 mb-2">Price</label>
          <input
            id="price"
            onChange={onMutate}
            className="w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
            type="number"
            placeholder="Price"
            value={price}
            required
          />
          <label className="mt-4 mb-2">Address</label>
          <input
            id="address"
            onChange={onMutate}
            className="w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
            type="text"
            placeholder="Address"
            value={address}
            required
          />

          <div className="mt-4 flex space-x-4">
            <div>
              <label className="mr-2">Latitude</label>
              <input
                className=" rounded-md px-4 py-2 text-black ring-2 ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
                type="number"
                id="latitude"
                value={latitude}
                onChange={onMutate}
                required
              />
            </div>
            <div>
              <label className="mr-2">Longitude</label>
              <input
                className=" rounded-md px-4 py-2 text-black ring-2 ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
                type="number"
                id="longitude"
                value={longitude}
                onChange={onMutate}
                required
              />
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <div>
              <label className="mt-4 mb-2 mr-1">Parking</label>
              <input
                id="parking"
                className="rounded-md px-4 py-2 text-black"
                type="checkbox"
                checked={parking}
                onChange={(e) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    [e.target.id]: e.target.checked,
                  }));
                }}
              />
            </div>
            <div>
              <label className="mt-4 mb-2 mr-1">Furnished</label>
              <input
                id="furnished"
                className="rounded-md px-4 py-2 text-black"
                type="checkbox"
                checked={furnished}
                onChange={(e) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    [e.target.id]: e.target.checked,
                  }));
                }}
              />
            </div>
            <div>
              <label className="mt-4 mb-2 mr-1">Wifi</label>
              <input
                id="wifi"
                className="rounded-md px-4 py-2 text-black"
                type="checkbox"
                checked={wifi}
                onChange={(e) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    [e.target.id]: e.target.checked,
                  }));
                }}
              />
            </div>
          </div>
          <label className="mt-4 mb-2">Images</label>
          <input
            className="w-[100%] rounded-md px-4 py-2 text-black ring-2 ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 md:w-[50%]"
            type="file"
            id="images"
            onChange={onMutate}
            max="6"
            accept=".jpg,.png,.jpeg"
            multiple
            required
          />
          <button
            type="submit"
            className="mt-4 w-fit rounded-md border-x border-y border-solid border-zinc-300 bg-zinc-200 px-4 py-2 text-zinc-900 transition duration-200 ease-in-out hover:-translate-y-1 hover:drop-shadow-md active:bg-gray-600"
          >
            Create Listing
          </button>
        </form>
      </main>
    </motion.div>
  );
}

export default CreateListing;
