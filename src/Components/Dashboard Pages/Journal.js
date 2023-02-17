import { useState, useReducer } from "react";
import { AiOutlineSearch, AiOutlineDoubleRight } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import ContentEditable from "react-contenteditable";
import { Journalitem } from "./JournalItems";

function reducer(state, action) {}

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

function Journal({ showEdit, setShowEdit, showTags, setShowTags }) {
  const [journalItems, dispatch] = useReducer(reducer, Journalitem);
  const [journInput, journDispatch] = useReducer(journReducer, {
    title: "",
    tag: "",
    description: "Give a description on this Journal",
    context: "Start writing...",
  });

  function setToEmpty() {
    journDispatch({ type: "set_to_empty" });
  }

  function whenJournIsClicked(journ) {
    journDispatch({ type: "get_journ", data: journ });
  }

  function whenChangingInputs(event) {
    const { value, name } = event.target;
    journDispatch({ type: "get_inputs", val: value, nam: name });
  }

  const [isShow, setIsShow] = useState(null);

  const date = new Date();
  const theDate = date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function getShowEdit(journ) {
    setShowEdit(true);
    whenJournIsClicked(journ);
  }

  function onClickNewButton() {
    setToEmpty();
    setShowEdit(true);
  }

  return (
    <section
      className={
        showEdit
          ? " md:pt-28 sm:pt-16 pt-5 md:pl-28 sm:pl-10 pl-2 md:pr-10 md:pb-10 w-[83vw] lg:w-[40vw] box-border transition-all duration-300"
          : " md:pt-28 sm:pt-16 pt-5 md:pl-28 sm:pl-10 pl-2 md:pr-10 md:pb-10 w-[83vw] box-border"
      }
    >
      <div className="">
        <div className="font-extrabold text-3xl mb-3">JOURNAL</div>
        <div
          className={
            showEdit ? "" : "lg:w-[40vw] md:w-[60vw] sm:w-[50vw] text-md"
          }
        >
          Document your life, goals and accomplishment to always remind yourslef
          of all you have gone through and how far you've come.
        </div>
      </div>
      <div className="flex items-center justify-end md:items-end border-b-2 border-gray-700 pb-2 pt-8 pr-4">
        <div className="text-sm flex items-center justify-between w-[55vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw]">
          <div>Filter</div>
          <div>Sort</div>
          <div className="text-lg">
            <AiOutlineSearch />
          </div>
          <div>
            <button
              onClick={onClickNewButton}
              className="bg-blue-600 py-1 px-2 rounded-md flex justify-center items-center text-white"
            >
              <div className="mr-1 text-white">New</div>
              <FaChevronDown className="pl-1 border-l-[1px] border-black" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:px-10 sm:py-5 py-3 box-border sm:text-sm text-xs">
        {journalItems.map((journ, index) => {
          return (
            <div
              onMouseOver={() => setIsShow(index)}
              onMouseOut={() => setIsShow(null)}
              className="cursor-pointer flex justify-between items-center py-1 px-2 rounded-md hover:bg-gray-300 box-border"
            >
              <div className="flex justify-start items-center">
                <ContentEditable html={journ.title} className="outline-none" />
                <CiEdit
                  onClick={() => getShowEdit(journ)}
                  className={
                    isShow === index ? "block text-xl" : "text-xl hidden"
                  }
                />
              </div>

              <div className="flex justify-start items-center">
                <div className="bg-purple-400 rounded-lg px-2">{journ.tag}</div>
                <div className="ml-2 text-gray-400">{theDate}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={
          showEdit
            ? "p-2 absolute top-0 right-0 bg-white h-[100vh] w-[83vw] lg:w-[40vw] transition-all duration-300 overflow-y-scroll overflow-x-hidden"
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

export default Journal;
