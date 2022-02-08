function Card({ data }) {
  return (
    <div className="my-4 flex h-[100%] flex-col rounded-md">
      <div className="relative">
        <img
          src={data.img}
          alt=""
          className=" h-auto w-auto rounded-md object-cover"
        />
        <p className="absolute bottom-4 left-4 rounded-lg bg-zinc-900 p-1 text-sm text-white">
          New House
        </p>
      </div>
      <div>
        <h3 className="my-1 font-medium">{data.title}</h3>
        <p className="text-sm">{data.description.substring(0, 90)}...</p>
      </div>
    </div>
  );
}

export default Card;
