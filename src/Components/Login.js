import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight, BsAsterisk} from 'react-icons/bs'
import NavSide from './NavSide'

function Login({navs, setNavs, Page, setPage, styl, setStyl, show, setShow}){
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    function onLoginInput(event){
        const {value, name} = event.target
        setLogin((prevValue)=>{
            return{
            ...prevValue,
            [name]:value
            }
            
        })
    }

    return(
        <section className="bg-gray-200 h-[100vh]">
            <NavSide navs={navs} setNavs={setNavs} Page={Page} setPage={setPage} setStyl={setStyl} styl={styl} show={show} setShow={setShow}/>            <section className="flex justify-center items-center my-[2rem] rounded-xl w-[100vw]">
                <div className=" ">
                    <div className="text-start text-gray-700 p-2 font-bold text-xl md:text-3xl border-b-[1px] border-gray-300 w-[13rem]">LOGIN</div>
                    <div className='p-3'>
                        <div className='mt-1'>
                            <div className='mb-1 flex justify-start items-start'>Username<BsAsterisk className='text-[0.5rem] text-red-500'/></div>
                            <input className='border-none p-4 rounded-xl md:w-[50vw] lg:w-[30vw] w-[90vw] outline-blue-500' type="text" name="username" placeholder='Enter your Username' value={login.username} onChange={onLoginInput}/>
                        </div>
                        <div className='mt-2'>
                            <div className='mb-1 flex justify-start items-start'>Password<BsAsterisk className='text-[0.5rem] text-red-500'/></div>
                            <input className='border-none p-4 rounded-xl md:w-[50vw] lg:w-[30vw] w-[90vw] outline-blue-500' type="password" name="password" placeholder='Enter your Passwrod' value={login.password} onChange={onLoginInput}/>
                        </div>
                        <div className='flex justify-end'>
                            <button className='text-blue-500 mt-2'>Forgotten password?</button>
                        </div>
                        
                        <Link to="/dashboard">
                            <button className='text-white text-lg text-gray-700 bg-blue-500 md:w-[50vw] lg:w-[30vw] w-[90vw] rounded-xl mt-3 p-4'>Sign In</button>
                        </Link>
                        <div className='flex justify-center items-center mt-2'>
                            <div className='text-gray-700 mr-2'>Don't have an account?</div>
                            <Link to="/signup">
                                <div className='text-blue-500 flex justify-center items-end'>Sign Up <BsArrowRight/></div>
                            </Link>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
        </section>
    )
}

export default Login