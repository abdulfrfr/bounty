import {useState} from 'react'
import NavSide from "./NavSide"
import image from '../signup.jpg'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

function Signup({navs, setNavs, Page, setPage, styl, setStyl, show, setShow}){
    const [signup, setSignup] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function getSignupInput(event){
        const {name, value} = event.target

        setSignup((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    return(
        <section className="bg-gray-200 h-[100vh]">
            <NavSide navs={navs} setNavs={setNavs} Page={Page} setPage={setPage} setStyl={setStyl} styl={styl} show={show} setShow={setShow}/>
            <div className="block md:flex md:justify-center md:items-start">
            <div className="object-contain hidden md:flex md:justify-center md:items-center w-[50vw] h-[80vh]">
                <img src={image} alt="signup-img" className="w-[100%]"/>
            </div>
            <div className="'md:mx-5 md:w-[50vw] md:h-[80vh] flex flex-col justify-start items-center">
                <div className="w-[15rem] text-center text-gray-700 p-2 font-bold text-xl md:text-3xl border-b-[1px] border-gray-300">SIGN UP</div>
                <div className=''>
                    <div className='flex justify-between items-center my-2 '>
                        <div className=''>
                            <div className='text-xl ml-1 text-gray-800'>First Name</div>
                            <input onChange={getSignupInput} className='border-none p-4 rounded-xl md:w-[24vw] lg:w-[22vw] w-[44vw] outline-blue-500' type="text" name="firstName" placeholder="First Name" value={signup.firstName}/>
                        </div>
                        <div className=''>
                            <div className='text-xl ml-1 text-gray-800'>Last Name</div>
                            <input onChange={getSignupInput} className='border-none p-4 rounded-xl md:w-[24vw] lg:w-[22vw] w-[44vw] outline-blue-500' type="text" name="lastName" placeholder="First Name" value={signup.lastName}/>
                        </div>
                    </div>
                    <div className='my-2 '>
                        <div className='text-xl ml-1 text-gray-800'>Email</div>
                        <input onChange={getSignupInput} className='border-none p-4 rounded-xl md:w-[50vw] lg:w-[45vw] w-[91vw] outline-blue-500' type="email" name='email' placeholder='Email' value={signup.email}/>
                    </div>
                    <div className='my-2 '>
                        <div>
                            <div className='text-xl ml-1 text-gray-800'>Password</div>
                            <input onChange={getSignupInput} className=' mb-2 border-none p-4 rounded-xl md:w-[50vw] lg:w-[45vw] w-[91vw] outline-blue-500' type="password" name='password' placeholder='Passwword' value={signup.password}/>
                        </div>
                        <div>
                            <div className='text-xl ml-1 text-gray-800'>Confirm Password</div>
                            <input onChange={getSignupInput} className='  border-none p-4 rounded-xl md:w-[50vw] lg:w-[45vw] w-[91vw] outline-blue-500' type="password" name='confirmPassword' placeholder='Confirm Password' value={signup.confirmPassword}/>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/login">
                        <button className='text-white text-lg text-gray-700 bg-blue-500 md:w-[50vw] lg:w-[45vw] w-[90vw] rounded-xl mt-3 p-4'>Sign Up</button>
                    </Link>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <div>Already have an account?</div>
                        <Link to="/login">
                            <div className='flex justify-center items-end ml-1 text-blue-500'>Login In <BsArrowRight/></div>
                        </Link>
                    </div>
                </div>
            </div>
                
            </div>
        </section>
    )
}

export default Signup