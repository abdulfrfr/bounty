import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight, BsAsterisk } from "react-icons/bs";
import NavSide from "./NavSide";
import axios from "axios";

function userDetailReducer(state, action) {
  switch (action.type) {
    case "user_login":
      return [action.userData];
      break;

    default:
      console.log("ok");
      break;
  }
}

function Login({ navs, setNavs, Page, setPage, styl, setStyl, show, setShow }) {
  const navigate = useNavigate();
  let data;
  const [userDetail, userDetailDispatch] = useReducer(userDetailReducer, []);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function onLoginInput(event) {
    const { value, name } = event.target;
    setLogin((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  // async function loginUser() {
  //   console.log(login);
  //   const res = await axios
  //     .get(`http://localhost:5000/users/${login.email}/${login.password}`)
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   console.log(res);
  //   if (res.status === 200) {
  //     userDetailDispatch({ type: "user_login", userData: data });
  //     navigate("/dashboard");
  //   }
  // }

  return (
    <section className="bg-gray-200 h-[100vh] pt-20">
      <NavSide
        navs={navs}
        setNavs={setNavs}
        Page={Page}
        setPage={setPage}
        setStyl={setStyl}
        styl={styl}
        show={show}
        setShow={setShow}
      />{" "}
      <section className="flex justify-center items-center my-[2rem] rounded-xl w-[100vw]">
        <div className=" ">
          <div className="text-start text-gray-700 p-2 font-bold text-xl md:text-3xl border-b-[1px] border-gray-300 w-[13rem]">
            LOGIN
          </div>
          <div className="p-3">
            <div className="mt-1">
              <div className="mb-1 flex justify-start items-start">
                Email
                <BsAsterisk className="text-[0.5rem] text-red-500" />
              </div>
              <input
                className="border-none p-4 rounded-xl md:w-[50vw] lg:w-[30vw] w-[90vw] outline-blue-500"
                type="email"
                name="email"
                placeholder="Enter your Username"
                value={login.email}
                onChange={onLoginInput}
              />
            </div>
            <div className="mt-2">
              <div className="mb-1 flex justify-start items-start">
                Password
                <BsAsterisk className="text-[0.5rem] text-red-500" />
              </div>
              <input
                className="border-none p-4 rounded-xl md:w-[50vw] lg:w-[30vw] w-[90vw] outline-blue-500"
                type="password"
                name="password"
                placeholder="Enter your Passwrod"
                value={login.password}
                onChange={onLoginInput}
              />
            </div>
            <div className="flex justify-end">
              <button className="text-blue-500 mt-2">
                Forgotten password?
              </button>
            </div>

            <button
              // onClick={loginUser}
              className="text-white text-lg bg-blue-500 md:w-[50vw] lg:w-[30vw] w-[90vw] rounded-xl mt-3 p-4"
            >
              Sign In
            </button>

            <div className="flex justify-center items-center mt-2">
              <div className="text-gray-700 mr-2">Don't have an account?</div>
              <Link to="/signup">
                <div className="text-blue-500 flex justify-center items-end">
                  Sign Up <BsArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Login;
