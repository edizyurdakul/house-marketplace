import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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

function Category() {
  const [listings, setListings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("createdAt", "desc"),
          limit(10)
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
  }, [params.categoryName]);

  return (
    <>
      <h1 className="text-4xl font-semibold">
        {params.categoryName === "rent" ? "Houses For Rent" : "Houses For Sale"}
      </h1>
      <section>
        {isLoading ? (
          <Spinner />
        ) : listings && listings.length > 0 ? (
          <>
            <main>
              <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listings.map((listing) => (
                  <ListingItem
                    listing={listing.data}
                    id={listing.id}
                    key={listing.id}
                  />
                ))}
              </section>
            </main>
          </>
        ) : (
          <h2>No houses found for {params.useParams}</h2>
        )}
      </section>
    </>
  );
}

export default Category;
