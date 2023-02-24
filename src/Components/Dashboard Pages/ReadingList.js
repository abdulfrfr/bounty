// import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsBookshelf, BsSearch, BsChevronDoubleDown } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";

function ReadingList({ bookEdit, setBookEdit }) {
  return (
    <section className="box-border w-[80vw]">
      <div className="px-10">
        <div>
          <div className="flex justify-start items-center font-extrabold text-xl lg:text-2xl mt-24">
            <div>
              <BsBookshelf className="mr-2" />
            </div>
            <div className="">Reading List</div>
          </div>

          <div className="mt-5">
            <div className="w-[68vw] md:w-[30vw] text-sm">
              Document the Books you have read and the Books you would love to
              read in the nearest future...
            </div>
          </div>
        </div>

        <div className="md:w-[30vw] w-[70vw]">
          <div className=" border-b-[1px] border-b-black flex justify-end items-center px-3 pt-5 pb-2">
            <div className="mr-3 text-lg font-extrabold">
              <BsSearch />
            </div>
            <div className="mr-3 text-lg font-extrabold">
              <BiSortAlt2 />
            </div>
            <div
              onClick={() => setBookEdit(true)}
              className="bg-blue-500 p-1 text-white text-xs lg:text-sm rounded-md block lg:hidden"
            >
              Add New
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          bookEdit
            ? "p-4 absolute w-screen h-[100vh] top-0 -right-[3.4rem] bg-white translate-y-0 transition-all duration-300"
            : "p-4 absolute w-[80vw] lg:w-[43vw] h-[100vh] top-0 right-0 bg-white lg:translate-y-0 translate-y-[100rem] transition-all duration-300"
        }
      >
        <BsChevronDoubleDown
          onClick={() => setBookEdit(false)}
          className={"block sm:hidden "}
        />

        <div>
          <input
            type="text"
            name="booktitle"
            placeholder="Untitled"
            value={""}
            className="w-full p-5 box-border text-4xl outline-none"
          />
        </div>
      </div>
    </section>
  );
}

export default ReadingList;
