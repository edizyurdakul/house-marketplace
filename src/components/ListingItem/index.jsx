import { Link } from "react-router-dom";
import { FaBed, FaBath, FaWifi, FaParking, FaChair } from "react-icons/fa";

function ListingItem({ listing, id, profile }) {
  console.log(listing);

  return (
    <Link to={`/category/${listing.type}/${id}`}>
      <div className="relative mx-0 flex h-[100%] flex-col rounded-md ring-1 ring-zinc-200 transition duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-lg">
        <div className="relative">
          <img
            src={listing.imgUrls[0]}
            alt={listing.name}
            className=" h-auto w-auto rounded-md"
          />
          <p className="absolute bottom-4 left-4 rounded-lg bg-zinc-900  p-1 text-sm uppercase text-zinc-50">
            {listing.type}
          </p>
        </div>
        <div className="p-4">
          <h3 className=" font-medium">{listing.name}</h3>
          <p>{listing.location}</p>
          <p className="w-fit rounded-lg text-sm uppercase text-green-500">
            ${listing.price}
            {listing.type === "rent" && "/Month"}
          </p>
          <div className="flex space-x-4">
            <div className="mt-2 flex items-center">
              <p className="text-sm">{listing.bedrooms}</p>
              <FaBed className="ml-1" />
            </div>
            <div className="mt-2 flex items-center">
              <p className="text-sm">{listing.bathrooms}</p>
              <FaBath className="ml-1 text-sm" />
            </div>
            <div className="mt-2 flex items-center">
              <p>
                {listing.wifi === true ? (
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
                {listing.furnished === true ? (
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
                {listing.parking === true ? (
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
      </div>
    </Link>
  );
}

export default ListingItem;
