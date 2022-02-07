import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineContacts,
  AiOutlineFileText,
} from "react-icons/ai";

function HowItWorks() {
  return (
    <section className="relative py-8">
      <div className="flex flex-col rounded-md bg-zinc-900 p-8 text-zinc-50 sm:p-12">
        <div className="mb-12 md:text-center">
          <p className="text-sm font-semibold">FINDING YOUR NEW HOME</p>
          <h2 className="my-2 text-4xl font-semibold">How It Works</h2>
          <p className="mx-auto md:w-[50%]">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8  md:grid-cols-2">
          <div className="flex gap-4">
            <div>
              <AiOutlineSearch className="text-4xl" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Search</h3>
              <p>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <AiOutlineUser className="text-4xl" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Sign Up</h3>
              <p>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <AiOutlineContacts className="text-4xl" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Enquire</h3>
              <p>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <AiOutlineFileText className="text-4xl" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Lease</h3>
              <p>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
