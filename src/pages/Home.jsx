import {
  Hero,
  FeaturedHouses,
  HowItWorks,
  ForRent,
  CallToAction,
} from "../components/Sections";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";

function Home() {
  const [listingsSale, setListingsSale] = useState(null);
  const [listingsRent, setListingsRent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");
        const qSale = query(
          listingsRef,
          where("type", "==", "sale"),
          orderBy("timestamp", "desc"),
          limit(10)
        );
        const qRent = query(
          listingsRef,
          where("type", "==", "rent"),
          orderBy("timestamp", "desc"),
          limit(10)
        );
        const querySnapSale = await getDocs(qSale);
        const querySnapRent = await getDocs(qRent);
        const listingsSale = [];
        const listingsRent = [];
        querySnapSale.forEach((doc) => {
          return listingsSale.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        querySnapRent.forEach((doc) => {
          return listingsRent.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListingsSale(listingsSale);
        setListingsRent(listingsRent);

        setIsLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings", {
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

    fetchListings();
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Hero />
      {isLoading ? (
        <div className="my-8 flex justify-center">
          <Spinner />
        </div>
      ) : listingsSale && listingsSale.length > 0 ? (
        <>
          <h2 className="mb-4 text-3xl font-semibold">Houses For Sale</h2>
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listingsSale.map((listing) => (
              <ListingItem
                listing={listing.data}
                id={listing.id}
                key={listing.id}
              />
            ))}
          </section>
        </>
      ) : (
        <h2>No houses found for sale</h2>
      )}
      <HowItWorks />
      {isLoading ? (
        <div className="my-8 flex justify-center">
          <Spinner />
        </div>
      ) : listingsRent && listingsRent.length > 0 ? (
        <>
          <h2 className="mb-4 text-3xl font-semibold">Houses For Rent</h2>
          <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listingsRent.map((listing) => (
              <ListingItem
                listing={listing.data}
                id={listing.id}
                key={listing.id}
              />
            ))}
          </section>
        </>
      ) : (
        <h2 className="mb-8 text-xl">No houses found for rent</h2>
      )}
      <CallToAction />
    </motion.div>
  );
}

export default Home;
