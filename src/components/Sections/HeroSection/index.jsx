import React from "react";

function Hero() {
  return (
    <div
      className="relative grid min-h-[70vh] items-center justify-center rounded-md"
      style={{
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundImage: `
      url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
      }}
    >
      <div className="absolute h-[100%] w-[100%] rounded-md bg-gray-900 opacity-60"></div>
      <div className="relative px-4 text-left text-white md:px-0 md:text-center">
        <h1 className="mb-4 text-3xl font-semibold md:mx-auto md:w-[75%] md:text-5xl">
          Find the place to live your dreams easily here
        </h1>
        <p className="text-md mb-4 md:mx-auto md:w-[50%]">
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <form>
          <input
            type="search"
            placeholder="Search"
            className="mb-4 w-[100%]  rounded-md px-4 py-2 ring-2 ring-transparent focus:outline-none focus:ring-2 focus:ring-slate-900 md:w-[50%]"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="rounded-md border-x border-y border-solid border-slate-900 bg-slate-900 px-4 py-2 text-slate-50 transition duration-200 ease-in-out hover:-translate-y-1 hover:drop-shadow-md active:bg-gray-600 md:ml-4"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
