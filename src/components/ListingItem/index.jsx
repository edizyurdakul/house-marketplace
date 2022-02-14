import { Link } from "react-router-dom";

function ListingItem({ listing, id }) {
  return (
    <Link to={`/category/${listing.type}/${id}`}>
      <div className="relative mx-0 flex h-[100%] flex-col rounded-md ring-1 ring-zinc-200 transition duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-lg">
        <div className="relative">
          <img
            src={listing.imageUrls[0]}
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
        </div>
      </div>
    </Link>
  );
}

export default ListingItem;
