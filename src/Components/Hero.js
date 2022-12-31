import { useState, useEffect } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'


function Hero(){

const [styl, setStyl] = useState(0)

    const NavItems = [
        {
            title: "HOME",
            link: "/home",
            page: Home, 
            style: ""
        },
        {
            title: "ABOUT",
            link: "/about",
            page: About
        },
        {
            title: "CONTACT",
            link: "/contact",
            page: Contact
        }
    ]

    
    const firstArr = NavItems.filter((nav, index) => index === 0 )
        
    const [Page, setPage] = useState(firstArr)

    function getPage(index){
     const newArr = NavItems.filter((page, indx) => indx === index)   
     setPage(newArr)

     setStyl(index)
    }

    



    
    return(
        <section className="bg-gray-200">
            <section className="md:px-15 lg:px-20 px-5 flex justify-between items-center">
                <Link to="/">
                    <div className="p-4 text-2xl text-gray-700 font-bold">BOUNTY</div>
                </Link>   
                <div className='hidden md:block md:flex justify-between items-center'>
                    {NavItems.map((nav, index)=>{
                        return(
                            <div onClick={()=>{getPage(index)}} key={index} className={index === styl ? 'p-4 text-blue-500 border-b-2 border-b-gray-700  cursor-pointer text-2xl' : 'p-4 text-blue-500 border-b-2 border-b-gray-200 cursor-pointer text-2xl'}>{nav.title}</div>
                        )
                    })}
                </div>   
                <div className='justify-between items-center hidden md:flex'>
                    <Link to="/login">
                        <button className='py-2 px-3 text-xl bg-gray-300 text-gray-700 rounded-lg mr-5'>Sign In</button>
                    </Link>

                    <Link to="/signup">
                        <button className='p-3 text-xl bg-blue-500 rounded-lg text-white'>Get Started</button>
                    </Link>
                </div>
                <HiMenuAlt3 className='text-3xl block md:hidden cursor-pointer'/>
            </section>
            <section>
            <section>
            {Page.map((res, index) => {

                    return(
                        <res.page key={index}/>
                    )
                })}
            </section>
            </section>
        </section>
    )
}

export default Hero