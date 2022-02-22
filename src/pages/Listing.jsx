import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase.config";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Spinner from "../components/Spinner";
import { FaBed, FaBath, FaWifi, FaParking, FaChair } from "react-icons/fa";

function Listing() {
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setListing(docSnap.data());
        setIsLoading(false);
      }
    };

    fetchListing();
  }, [navigate, params.listingId]);

  return (
    <main>
      {isLoading ? (
        <div className="my-8 flex justify-center">
          <Spinner />
        </div>
      ) : (
        <section className="my-8">
          {/* SLIDER */}
          <div>
            <div
              className="relative h-[70vh] w-[100%] rounded-md bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${listing.imgUrls[0]})` }}
            >
              <p className="absolute bottom-4 left-4 rounded-md bg-zinc-900 p-1 uppercase text-zinc-50">
                House for {listing.type}
              </p>
            </div>
            <h1 className="my-4 text-2xl font-bold">{listing.name}</h1>
            <div className="flex space-x-4">
              <div className="mt-2 flex items-center">
                <p className="text-sm">{listing.bedrooms}</p>
                <FaBed className="mx-2" />
                {listing.bedrooms > 1 ? "Bedrooms" : "Bedroom"}
              </div>
              <div className="mt-2 flex items-center">
                <p className="text-sm">{listing.bathrooms}</p>
                <FaBath className="mx-2 text-sm" />
                {listing.bedrooms > 1 ? "Bathrooms" : "Bathroom"}
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="mt-2 flex items-center">
                <div>
                  {listing.wifi === true ? (
                    <>
                      <p>
                        <FaWifi />
                      </p>
                    </>
                  ) : (
                    <p>
                      <FaWifi className="text-zinc-900 opacity-25" />
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex items-center">
                <div>
                  {listing.furnished === true ? (
                    <p>
                      <FaChair className="text-sm" />
                    </p>
                  ) : (
                    <p>
                      <FaChair className="text-zinc-900 opacity-25" />
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex items-center">
                <div>
                  {listing.parking === true ? (
                    <p>
                      <FaParking className="text-sm" />
                    </p>
                  ) : (
                    <p>
                      <FaParking className="text-zinc-900 opacity-25" />
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 h-[30vh]">
            <MapContainer
              center={[listing.geolocation.lat, listing.geolocation.lng]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
              />
              <Marker
                position={[listing.geolocation.lat, listing.geolocation.lng]}
              >
                <Popup>{listing.address}</Popup>
              </Marker>
            </MapContainer>
          </div>

          {auth.currentUser?.uid !== listing.userRef && (
            <Link
              to={`/contact/${listing.userRef}?listingName=${listing.name}`}
            >
              <button
                type="button"
                className="mt-8 rounded-md border-x border-y border-solid border-zinc-900 bg-zinc-900 px-4 py-2 text-slate-50  active:bg-gray-600"
              >
                Contact Landlord
              </button>
            </Link>
          )}
        </section>
      )}
    </main>
  );
}

export default Listing;
