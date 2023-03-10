import { useState, useReducer } from "react";
import { AiOutlineSearch, AiOutlineDoubleRight } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import ContentEditable from "react-contenteditable";
import { Journalitem } from "./JournalItems";

function reducer(state, action) {
  switch (action.type) {
    case "new_journ":
      return [...state, action.val];
    case "edit_journ":
      state.splice(action.index, 1, action.inputs);
      return [...state];
    default:
      return [...state];
  }
}

function journReducer(state, action) {
  switch (action.type) {
    case "get_journ":
      return {
        title: action.data.title,
        description: action.data.description,
        context: action.data.context,
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
  const [journIndex, setJournIndex] = useState(null);
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

  function getShowEdit(journ, index) {
    setShowEdit(true);
    whenJournIsClicked(journ);
    setJournIndex(index);
  }

  function onClickNewButton() {
    setToEmpty();
    setShowEdit(true);
    setJournIndex(null);
  }

  function addJournal() {
    if (journIndex !== null) {
      if (journInput.title !== "") {
        dispatch({ type: "edit_journ", inputs: journInput, index: journIndex });
      }
    } else {
      if (journInput.title !== "") {
        dispatch({ type: "new_journ", val: journInput });
      }
    }
  }

  return (
    <section
      className={
        showEdit
          ? " md:pt-28 sm:pt-16 pt-20 md:pl-2 sm:pl-2 pl-2 md:pr-10 md:pb-10 w-[80vw] lg:w-[40vw] box-border transition-all duration-300"
          : " md:pt-28 sm:pt-16 md:pl-2 sm:pl-2 pl-2 md:pr-32 md:pb-10 w-full pt-20 box-border"
      }
    >
      <div className="">
        <div className="font-extrabold text-3xl mb-3">JOURNAL</div>
        <div className=" md:w-[30vw] sm:w-[50vw] text-sm">
          Document your life, goals and accomplishment to always remind yourslef
          of all you have gone through and how far you've come.
        </div>
      </div>
      <div className="flex items-center justify-end border-b-2 border-gray-700 pb-2 pt-8 pr-10">
        <div className="text-sm flex items-center justify-end w-full sm:w-[30vw] md:w-[20vw] lg:w-[15vw]">
          <div className="mr-3">Filter</div>
          <div className="mr-3">Sort</div>
          <div className="text-lg mr-4">
            <AiOutlineSearch />
          </div>
          <div className="lg:pr-10">
            <button
              onClick={onClickNewButton}
              className="bg-blue-600 py-1 px-2 rounded-md flex justify-center items-center text-white"
            >
              <div className="mr-5 text-white">New</div>
              <FaChevronDown className="pl-1 border-l-[1px] border-black" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:px-10 sm:py-5 py-3 box-border sm:text-sm text-xs">
        {journalItems.map((journ, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => setIsShow(index)}
              onMouseOut={() => setIsShow(null)}
              className="cursor-pointer flex justify-between items-center py-1 px-2 rounded-md hover:bg-gray-300 box-border"
            >
              <div className="flex justify-start items-center">
                <ContentEditable html={journ.title} className="outline-none" />
                <CiEdit
                  onClick={() => getShowEdit(journ, index)}
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
            ? "p-2 absolute top-0 -right-[3.4rem] lg:left-[31rem] md:right-0 xl:left-[37.5rem]  bg-white h-[100vh] w-screen lg:w-[40vw] transition-all duration-300 overflow-y-scroll overflow-x-hidden"
            : "absolute top-0 right-0 bg-white h-[100vh] w-screen translate-x-[95rem] transition-all duration-300"
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
            className="w-[100%] p-4 bg-gray-100 resize-none rounded-md outline-none text-lg mt-5"
          />
        </div>
        <button
          onClick={addJournal}
          className="text-white bg-blue-500 py-3 px-5 rounded-xl"
        >
          ADD
        </button>
      </div>
    </section>
  );
}

export default Journal;
