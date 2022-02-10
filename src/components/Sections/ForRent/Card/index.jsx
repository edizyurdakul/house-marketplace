function Card({ data }) {
  return (
    <div className="relative my-4 mx-0 flex h-[100%] flex-col rounded-md ring-1 ring-zinc-200 transition duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-lg">
      <div className="relative">
        <img src={data.img} alt="" className=" h-auto w-auto rounded-md" />
        <p className="absolute bottom-4 left-4 rounded-lg bg-zinc-900 p-1 text-sm text-zinc-50">
          New House
        </p>
      </div>
      <div className="p-4">
        <h3 className=" font-medium">{data.title}</h3>
        <p className="text-sm">{data.description.substring(0, 90)}...</p>
      </div>
    </div>
  );
}

export default Card;
