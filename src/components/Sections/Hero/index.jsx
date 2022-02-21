import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="pb-8">
      <div
        className="relative grid min-h-[70vh] items-center justify-center rounded-md lg:h-[90vh]"
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
          <Link to="/listings">
            <button className="mr-4 rounded-md border-x border-y border-solid border-zinc-200 px-4 py-2 transition duration-200 ease-in-out  hover:-translate-y-1 hover:drop-shadow-md">
              Explore Houses
            </button>
          </Link>

          <Link to="/signup">
            <button className="rounded-md border-x border-y border-solid border-zinc-900 bg-zinc-900 px-4 py-2 text-zinc-50 transition duration-200 ease-in-out hover:-translate-y-1 hover:drop-shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
