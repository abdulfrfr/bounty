import { useState } from "react";
import DashboardHead from "./DashboardHead";
import { BsCheckLg, BsClipboardData } from "react-icons/bs";
import TodoItems from "./TodoItems";

function Todo() {
  const [addInput, setAddInput] = useState("");
  const [indx, setIndx] = useState(null);
  const [showOpt, setShowOpt] = useState(null);
  const [afterShow, setAfterShow] = useState(false);

  function getInput(event) {
    const value = event.target.value;
    setAddInput(value);
  }

  function showInput(index) {
    setIndx(index);
    setAddInput("");
  }

  function getAddBtn(index, inputs) {
    if (addInput === "") {
      setAddInput("");
      setIndx(index);
    } else {
      inputs.push(addInput);
      setAddInput("");
      setIndx(null);
    }
  }

  function getAddBtnMinus() {
    setIndx(null);
  }

  function showOptFunc(index) {
    setShowOpt(index);
  }
  function hideOptFunc(index) {
    setShowOpt(null);
  }

  return (
    <section className="pt-20 w-full ">
      <DashboardHead className="w-full" />

      <div className="mt-5">
        <div className="box-border w-[80vw] text-xl lg:pl-3 pt-3 flex justify-between items-center">
          <div>
            <div className="box-border flex justify-start items-center text-5xl mb-3">
              <BsCheckLg className="mr-4" />
              Task
            </div>
            <div className="md:text-[1rem] text-[0.7rem] box-border w-full">
              Use this template to track your personal tasks. <br /> Click
              <span className="text-red-700 bg-red-200 p-1 rounded-lg">
                + New
              </span>
              to create a new task directly on this board. <br /> Click an
              existing task to add additional context or subtasks.
            </div>
          </div>
        </div>

        <div className="md:mt-4 mt-2 text-gray-700 flex justify-between items-center md:mr-20 border-b-2 border-b-gray-400 box-border w-full">
          <div className="text-xl font-extrabold flex justify-start items-center px-4 md:py-2 py-1 box-border">
            <BsClipboardData className="mr-2" />
            Board
          </div>
        </div>
        <div className="relative md:overflow-x-hidden overflow-x-scroll overflow-auto bg-white w-full h-[100vh] px-2">
          <div className="flex justify-between items-start w-[300vw] h-[600rem] md:w-[75vw] p-4">
            {TodoItems.map((todo, index) => {
              return (
                <div key={index} className="md:w-[20vw] w-[70vw]">
                  <div className={todo.nameStyle}>
                    <div className="">{todo.name}</div>
                  </div>
                  <div
                    onClick={() => showInput(index)}
                    className={
                      index === indx ? "hidden" : `${todo.addDivStyle}`
                    }
                  >
                    <todo.addIcon className={todo.iconStyle} /> New
                  </div>
                  <div
                    className={
                      index === indx ? `${todo.inputDivStyle}` : "hidden"
                    }
                  >
                    <input
                      onChange={getInput}
                      className={todo.inputStyle}
                      type="text"
                      name="add"
                      placeholder=""
                      value={addInput}
                    />
                    <div className="flex justify-between items-center">
                      <todo.addBtnIcon
                        onClick={() => getAddBtn(index, todo.inputs)}
                        className={todo.addBtnStyle}
                      />
                      <todo.removeBtnIcon
                        onClick={getAddBtnMinus}
                        className={todo.removeBtnStyle}
                      />
                    </div>
                  </div>
                  {todo.inputs.map((input, index) => {
                    return (
                      <div
                        key={index}
                        className="break-all box-border flex justify-start items-center relative"
                      >
                        <div
                          className={
                            todo.name === "ToDo"
                              ? "p-1 rounded-[50%] bg-blue-300 mr-1"
                              : todo.name === "Doing"
                              ? "p-1 rounded-[50%] bg-red-300 mr-1"
                              : todo.name === "Done"
                              ? "p-1 rounded-[50%] bg-green-300 mr-1"
                              : "hidden"
                          }
                        ></div>
                        <div
                          onMouseOver={() => showOptFunc(index)}
                          onMouseOut={hideOptFunc}
                        >
                          {input}
                        </div>
                        <div
                          onMouseOver={() => setAfterShow(true)}
                          onMouseOut={() => setAfterShow(false)}
                          className={
                            showOpt === index
                              ? "absolute left-10 top-5 box-border bg-gray-200 rounded-md p-3"
                              : afterShow
                              ? "absolute left-10 top-5 box-border bg-gray-200 rounded-md p-3"
                              : "hidden"
                          }
                        >
                          <div className={""}>
                            <div className="hover:bg-gray-500 hover:text-white hover:rounded-md hover: p-2">
                              ToDo
                            </div>
                            <div className="hover:bg-gray-500 hover:text-white hover:rounded-md hover: p-2">
                              Doing
                            </div>
                            <div className="hover:bg-gray-500 hover:text-white hover:rounded-md hover: p-2">
                              Done
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Todo;
