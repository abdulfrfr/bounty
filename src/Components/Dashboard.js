import { useState, useReducer } from "react";
import Logo from "./Logo";
import { BsPlusLg } from "react-icons/bs";
import Items from "./DashboardItems";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { Journalitem } from "./Dashboard Pages/JournalItems";

function journReducer(state, action) {
  switch (action.type) {
    case "get_journ":
      return {
        title: action.data.title,
        description: action.data.description,
        context: action.data.description,
      };
    case "get_inputs":
      return {
        ...state,
        [action.nam]: action.val,
      };
    case "set_to_empty":
      return {
        title: "",
        tag: "",
        description: "Give a description on this Journal",
        context: "Start writing...",
      };

    default:
      console.log("gerrout");
      break;
  }
}

function reducer(state, action) {}

function Dashboard({ showEdit, setShowEdit, bookEdit, setBookEdit }) {
  const [journalItems, dispatch] = useReducer(reducer, Journalitem);
  const [journInput, journDispatch] = useReducer(journReducer, {
    title: "",
    tag: "",
    description: "Give a description on this Journal",
    context: "Start writing...",
  });
  const [showTags, setShowTags] = useState(false);
  const [trans, setTrans] = useState(false);
  const [id, setId] = useState(0);
  const [page, setPage] = useState(Items.filter((item, index) => index === 0));

  function setToEmpty() {
    journDispatch({ type: "set_to_empty" });
  }

  function getPage(indx) {
    setToEmpty();

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
  function whenJournIsClicked(journ) {
    journDispatch({ type: "get_journ", data: journ });
  }

  function whenChangingInputs(event) {
    const { value, name } = event.target;
    journDispatch({ type: "get_inputs", val: value, nam: name });
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
              <BsPlusLg className="text-2xl font-bold" />
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
                    setToEmpty={setToEmpty}
                    journalItems={journalItems}
                    whenJournIsClicked={whenJournIsClicked}
                    showEdit={showEdit}
                    setShowEdit={setShowEdit}
                    bookEdit={bookEdit}
                    setBookEdit={setBookEdit}
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
      <div
        className={
          showEdit
            ? "p-2 absolute bottom-0 right-0 bg-white h-[100vh] w-[83vw] lg:w-[40vw] transition-all duration-300 overflow-y-scroll overflow-x-hidden"
            : "absolute top-0 right-0 bg-white h-[100vh] w-[83vw] translate-x-[95rem] transition-all duration-300"
        }
      >
        <div>
          <AiOutlineDoubleRight
            className="cursor-pointer"
            onClick={() => setShowEdit(false)}
          />
        </div>
        <div>
          <div className="text-xs text-red-500 flex justify-start items-center">
            <RiErrorWarningLine className="mr-1" /> please make sure you have a
            title
          </div>
          <input
            onChange={whenChangingInputs}
            className="break-all box-border outline-none border-b-[1px] border-gray-200 w-[100%] p-2 text-5xl"
            type="text"
            name="title"
            placeholder="Untitled"
            value={journInput.title}
          />
          <textarea
            rows="3"
            cols="1"
            onChange={whenChangingInputs}
            className="resize-none outline-none w-[100%] bg-gray-300 box-border p-2 mt-4 rounded-md break-all"
            type="text"
            name="description"
            value={journInput.description}
          />
          <div className="mt-4 transition-all duration-300">
            <div
              onClick={() => setShowTags(!showTags)}
              className="bg-blue-500 text-white p-2 box-border rounded-md w-[30vw] sm:w-[12vw] md:w-[7vw] flex justify-between items-center"
            >
              Add Tag <BsChevronDown />
            </div>
            <div
              className={
                showTags
                  ? "flex flex-col justify-between items-start w-[20vw] box-border pt-2  transition-all duration-300 opacity-100"
                  : "fixed opacity-0 transition-all duration-300 -translate-x-96 "
              }
            >
              <div
                className={
                  showTags
                    ? "hover:bg-gray-200 py-1 px-2 box-border rounded-md"
                    : ""
                }
              >
                Daily
              </div>
              <div
                className={
                  showTags
                    ? "hover:bg-gray-200 py-1 px-2 box-border rounded-md"
                    : ""
                }
              >
                Special Events
              </div>
              <div
                className={
                  showTags
                    ? "hover:bg-gray-200 py-1 px-2 box-border rounded-md"
                    : ""
                }
              >
                Planning
              </div>
              <div
                className={
                  showTags
                    ? "hover:bg-gray-200 py-1 px-2 box-border rounded-md"
                    : ""
                }
              >
                Personal
              </div>
              <div
                className={
                  showTags
                    ? "hover:bg-gray-200 py-1 px-2 box-border rounded-md"
                    : ""
                }
              >
                Work
              </div>
            </div>
          </div>
        </div>
        <div>
          <textarea
            rows="10"
            onChange={whenChangingInputs}
            type="text"
            name="context"
            placeholder="write out your journal..."
            value={journInput.context}
            className="w-[100%] bg-gray-100 resize-none rounded-md outline-none text-lg mt-5"
          />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
