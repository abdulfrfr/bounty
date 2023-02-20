import { useReducer, useState } from "react";
import { MdOutlineImage } from "react-icons/md";
import ContentEditable from "react-contenteditable";
import { alertItems } from "./QuickPostItems";

function reducer(state, action) {
  switch (action.type) {
    case "create_new_item":
      return [...state, action.item];
    default:
      console.log("working...");
  }
}

function BlogPost() {
  const [alert, dispatch] = useReducer(reducer, alertItems);
  const [checkValue, setCheckValue] = useState({
    launch: "Launch",
    break: "Break",
    friend: "Friend",
  });

  function getEditables(event) {
    const value = event.target.value;

    console.log(value);
  }

  function pushAlert(prev) {
    dispatch({ type: "create_new_item", item: prev });
  }

  const [coverImg, setCoverImg] = useState("");

  async function uploadCoverImage(event) {
    const imageFile = event.target.files[0];

    const reader = await new FileReader();
    reader.addEventListener("load", (e) => {
      setCoverImg(e.target.result);
    });

    reader.readAsDataURL(imageFile);
  }

  return (
    <section>
      <div className="flex justify-center items-center w-[83vw] h-[16vh]">
        <div className="p-4 flex justify-start items-center w-[80vw] text-gray-700">
          <div className="text-2xl font-bold">Quick Note</div>
        </div>
      </div>

      <div className="relative bg-white mt-4 w-[83vw] h-[84vh] px-4 pt-5 pb-20 overflow-y-scroll overflow-x-hidden">
        <div
          className={coverImg === "" ? "hidden" : "relative w-full h-[40vh]"}
        >
          <img
            src={coverImg}
            alt="cover"
            className={
              coverImg === "" ? "hidden" : "object-cover w-full h-full"
            }
          />
        </div>
        <div className="absolute">
          <div>
            <label
              className="cursor-pointer flex justity-start items-center text-gray-400"
              for="image-upload"
            >
              <MdOutlineImage className="text-xl" /> add cover
            </label>
            <input
              id="image-upload"
              className="opacity-0 absolute z-[-1]"
              type="file"
              name="img"
              onChange={uploadCoverImage}
            />
          </div>
          <div>
            <input
              className="text-5xl w-[81vw] px-4 py-4 outline-none bg-none mb-5"
              type="text"
              name="title"
              placeholder="Untitle"
            />
          </div>
          <div className="flex justify-center items-center w-[80vw]">
            <div className="w-[60vw]">
              {alert.map((alt, index) => {
                return (
                  <div className="flex justify-center items-center mb-3">
                    <div className="flex justify-start items-center">
                      <div
                        onClick={() => pushAlert(alt)}
                        className="cursor-pointer"
                      >
                        +
                      </div>
                      <div className="flex justify-start items-start text-gray-800 bg-gray-200 rounded-lg p-4 lg:w-[60vw] w-[80vw] box-border">
                        <div>💡</div>
                        <ContentEditable
                          html={alt}
                          className="outline-none ml-2"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              <div>
                <ContentEditable
                  onChange={getEditables}
                  html="Add Some Text"
                  className="outline-none text-3xl pt-5 pb-4 border-b-2 border-gray-200 text-gray-700"
                />
                <ContentEditable
                  html="Add here..."
                  className="pt-2 outline-none"
                />
              </div>
              <div className="mt-7">
                <div>
                  <div>
                    <input
                      onClick={(event) => console.log(event.target.checked)}
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value={checkValue.launch}
                    />
                    <label for="vehicle1"> Eat Lunch</label>
                  </div>
                  <div>
                    <input
                      onClick={(event) => console.log(event.target.checked)}
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value={checkValue.break}
                    />
                    <label for="vehicle2"> Have a break</label>
                  </div>
                  <div>
                    <input
                      onClick={(event) => {
                        if (event.target.checked === true) {
                          console.log(event.target.value);
                        }
                      }}
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value={checkValue.friend}
                    />
                    <label for="vehicle3"> Going to my friend's</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </section>
  );
}

export default BlogPost;
