import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="relative pb-8">
      <div className="flex flex-col rounded-md bg-zinc-900 p-8 text-slate-50 sm:p-12">
        <div className="md:text-center">
          <h2 className="my-2 text-4xl font-semibold">Ready to dive in?</h2>
          <p className="mx-auto mb-4 md:w-[50%]">
            Start searching for your new home today for free.
          </p>

          <Link to="/listings">
            <button className="mr-4 rounded-md border-x border-y border-solid border-zinc-200 px-4 py-2 transition duration-200 ease-in-out  hover:-translate-y-1 hover:drop-shadow-md">
              Explore Houses
            </button>
          </Link>

          <Link to="/signup">
            <button className="rounded-md border-x border-y border-solid border-zinc-900 bg-zinc-700 px-4 py-2 text-zinc-50 transition duration-200 ease-in-out hover:-translate-y-1 hover:drop-shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
