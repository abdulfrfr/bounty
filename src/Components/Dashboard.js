import { useState } from "react";
import Logo from "./Logo";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import Items from "./DashboardItems";

function Dashboard({ showEdit, setShowEdit, bookEdit, setBookEdit }) {
  const [showTags, setShowTags] = useState(false);
  const [expand, setExpand] = useState(false);
  const [trans, setTrans] = useState(false);
  const [id, setId] = useState(0);
  const [page, setPage] = useState(Items.filter((item, index) => index === 0));

  function getPage(indx) {
    const newPage = Items.filter((item, index) => index === indx);

    setPage(newPage);
    setId(indx);

    setTrans(false);

    setShowEdit(false);
    setExpand(false);
  }

  function changeTrans() {
    // setTrans(!trans);
    // setBookEdit(false);
    console.log("ok");
  }

  return (
    <section className="bg-zinc-200 relative overflow-hidden transition-all duration-300">
      <div className="">
        <div className="flex justify-start items-start">
          <div
            className={
              expand
                ? "py-7 w-[60vw] flex flex-col justify-start items-center"
                : "py-7 w-[20vw] flex flex-col justify-start items-center sm:-translate-x-0 -translate-x-16"
            }
          >
            <Logo />
            <button
              onClick={changeTrans}
              className="box-border mb-10 flex justify-center lg:justify-between items-center lg:w-[13vw] lg:h-[8vh] rounded-[50%] lg:rounded-3xl border-2 border-gray-300 bg-gray-200 lg:px-5 w-[4rem] h-[4rem] text-gray-700"
            >
              <div className="text-sm lg:text-lg lg:block hidden">Compose</div>
              <BsPlusLg className="text-2xl lg:text-lg font-bold" />
            </button>

            <div className="flex flex-col justify-start items-center mt-5">
              {Items.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => getPage(index)}
                    className={
                      index === id
                        ? "mb-3 box-border cursor-pointer flex justify-start  items-center w-full  lg:px-10 px-2 py-2 bg-blue-300 rounded-r-3xl"
                        : "mb-3 box-border cursor-pointer flex justify-start  items-center w-full  lg:px-10 px-2 py-2"
                    }
                  >
                    <item.icon className="text-lg lg:text-md" />
                    <div
                      className={
                        expand
                          ? "text-sm lg:text-md lg:ml-2 block transition-all duration-300"
                          : "text-sm lg:text-md lg:ml-2 sm:block hidden transition-all duration-300"
                      }
                    >
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={
              expand
                ? "translate-x-0 w-[60vw] h-[100vh] transition-all duration-300"
                : "w-screen sm:w-[80vw] h-[100vh] transition-all duration-300 sm:-translate-x-0 -translate-x-14"
            }
          >
            {page.map((pg, index) => {
              return (
                <pg.page
                  key={index}
                  showEdit={showEdit}
                  setShowEdit={setShowEdit}
                  bookEdit={bookEdit}
                  setBookEdit={setBookEdit}
                  showTags={showTags}
                  setShowTags={setShowTags}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={
          !trans
            ? "translate-x-[95rem] transition-all duration-300 delay-100 w-[83vw] h-[100vh] bg-white flex justify-center items-center absolute top-0 right-0 "
            : "transition-all duration-300 delay-100 bg-white w-[80vw] h-[100vh] flex justify-center items-center absolute top-0 right-0"
        }
      >
        <div>
          <input type="text" name="title" placeholder="Untiitle" value="" />
          <textarea
            row="5"
            name="description"
            placeholder="Description"
            value=""
          />
          <div>Date Created: </div>
        </div>
      </div>
      <div
        className={
          showEdit
            ? "hidden"
            : bookEdit
            ? "hidden"
            : "block sm:hidden absolute top-2 left-2 rounded-[50%] bg-white p-4 text-lg"
        }
      >
        {!expand ? (
          <AiOutlineDoubleRight className="" onClick={() => setExpand(true)} />
        ) : (
          <AiOutlineDoubleLeft className="" onClick={() => setExpand(false)} />
        )}
      </div>
    </section>
  );
}

export default Dashboard;
