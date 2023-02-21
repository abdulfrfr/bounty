import { useState } from "react";
import Logo from "./Logo";
import { BsPlusLg } from "react-icons/bs";
import Items from "./DashboardItems";

function Dashboard({ showEdit, setShowEdit, bookEdit, setBookEdit }) {
  const [showTags, setShowTags] = useState(false);
  const [trans, setTrans] = useState(false);
  const [id, setId] = useState(0);
  const [page, setPage] = useState(Items.filter((item, index) => index === 0));

  function getPage(indx) {
    const newPage = Items.filter((item, index) => index === indx);

    setPage(newPage);
    setId(indx);

    setTrans(false);

    setShowEdit(false);
  }

  function changeTrans() {
    setTrans(!trans);
    setBookEdit(false);
  }

  return (
    <section className="bg-zinc-200 relative overflow-hidden">
      <div className="">
        <div className="flex justtify-start items-start">
          <div className="py-7 w-[17vw] h-[80vh] flex flex-col justify-between items-center">
            <Logo />
            <button
              onClick={changeTrans}
              className="flex  justify-center md:justify-between items-center md:w-[15vw] lg:w-[13vw] rounded-[50%] md:rounded-3xl border-2 border-gray-300 bg-gray-200 md:px-5 md:py-2 px-2 w-[3rem] h-[3rem] text-gray-700"
            >
              <div className="text-md lg:text-lg md:block hidden">Compose</div>
              <BsPlusLg className="text-md font-bold" />
            </button>
            <div className="h-[40vh] flex flex-col justify-between items-center">
              {Items.map((item, index) => {
                return (
                  <div
                    onClick={() => getPage(index)}
                    className={
                      index === id
                        ? "cursor-pointer flex justify-center md:justify-start items-center w-[20vw] md:w-[17vw] md:px-10 px-2 py-2 bg-blue-300 md:rounded-r-3xl"
                        : "cursor-pointer flex justify-center md:justify-start items-center w-[20vw] md:w-[17vw] md:px-10 px-2 py-2"
                    }
                  >
                    <item.icon className="md:text-md text-xl" />
                    <div className="text-md ml-3 lg:block hidden">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[40vw] h-[100vh]">
            {page.map((pg, index) => {
              return (
                <section>
                  <pg.page
                    showEdit={showEdit}
                    setShowEdit={setShowEdit}
                    bookEdit={bookEdit}
                    setBookEdit={setBookEdit}
                    showTags={showTags}
                    setShowTags={setShowTags}
                  />
                </section>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={
          !trans
            ? "translate-x-[95rem] transition-all duration-300 delay-100 w-[83vw] h-[100vh] bg-white flex justify-center items-center absolute top-0 right-0 "
            : "transition-all duration-300 delay-100 bg-white w-[83vw] h-[100vh] flex justify-center items-center absolute top-0 right-0"
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
    </section>
  );
}

export default Dashboard;
