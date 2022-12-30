import {useState} from 'react'
import {Link} from 'react-router-dom'

function Login(){
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
        <div className="bg-gray-200 h-[100vh]">
            <div className=" h-[10vh] w-[100vw] p-4 ">
                <div className="text-3xl font-bold">BOUNTY</div>
            </div>
            <div className="h-[60vh] w-[100vw] ">
                <div className="bg-white  w-[90vw] md:w-[35vw] m-[auto] my-[5rem] rounded-xl">
                    <div className=" text-blue-700 p-2 font-bold text-xl border-b-[1px] border-gray-300">LOGIN</div>
                    <div className='p-3 flex flex-col justify-between '>
                        <div className='mt-1'>
                            <div className='mb-1'>Username:</div>
                            <input className='border-gray-500 border-[2px] p-2 rounded-xl w-[100%] outline-none' type="text" name="username" placeholder='Enter your Username' value={login.username} onChange={onLoginInput}/>
                        </div>
                        <div className='mt-2'>
                            <div className='mb-1'>Password:</div>
                            <input className='border-gray-500 border-[2px] p-2 rounded-xl w-[100%] outline-none' type="password" name="password" placeholder='Enter your Passwrod' value={login.password} onChange={onLoginInput}/>
                        </div>
                        <Link to="/dashboard">
                            <button className='bg-blue-500 w-[100%] rounded-xl mt-3 p-2'>Sign In</button>
                        </Link>
                        <div className='flex flex-col justify-center align-center'>
                            <button className='text-blue-500 mt-1'>Forgotten password?</button>
                            <button className='text-blue-500'>Sign Up</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login