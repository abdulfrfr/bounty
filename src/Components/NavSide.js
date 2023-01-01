import {useEffect, useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {Link} from 'react-router-dom'

function NavSide({navs, setNavs, Page, setPage, styl, setStyl}){
    let show = false


    function getShow(){
        if (!show) {
            show = true
        }

        setStyl(null)
    }

    function getPage(index){
        const newArr = navs.filter((page, indx) => indx === index)
        
        setPage(newArr)
        
   
        setStyl(index)
       }

    return (
        <section className="px-3 py-3 md:px-10 flex justify-between items-center">
                <Link to="/">
                    <div className="text-2xl md:text-3xl text-blue-500 font-bold">BOUNTY</div>
                </Link>
                <div className='hidden md:block md:flex justify-between items-center'>
                    {navs.map((nav, index)=>{
                        return(
                            <Link to="/">
                                <div onClick={()=>{getPage(index)}} key={index} className={index === styl ? 'p-4 text-blue-500 border-b-2 border-b-gray-700  cursor-pointer text-2xl' : 'p-4 text-blue-500 border-b-2 border-b-gray-200 cursor-pointer text-2xl'}>{nav.title}</div>
                            </Link>
                        )
                    })}
                </div> 
                <div className={show ? 'hidden' : 'justify-between items-center hidden md:flex'}>
                    <Link to="/login">
                        <button onClick={getShow}   className='py-2 px-3 text-xl bg-gray-300 text-gray-700 rounded-lg mr-5'>Sign In</button>
                    </Link>

                    <Link to="/signup">
                        <button onClick={getShow}  className='p-3 text-xl bg-blue-500 rounded-lg text-white'>Get Started</button>
                    </Link>
                </div>
                <HiMenuAlt3 className='text-3xl block md:hidden cursor-pointer'/>
            </section>
    )
}

export default NavSide