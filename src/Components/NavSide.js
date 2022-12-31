import {HiMenuAlt3} from 'react-icons/hi'
import {Link} from 'react-router-dom'

function NavSide(){
    return (
        <section className="px-3 py-3 md:px-10 flex justify-between items-center">
                <Link to="/">
                    <div className="text-2xl md:text-3xl text-blue-500 font-bold">BOUNTY</div>
                </Link>
                <div className='hidden md:block md:flex justify-between items-center'>
                    <div className='p-4 text-2xl text-blue-500 border-b-2 border-b-gray-200 hover:border-b-gray-700 cursor-pointer'>HOME</div>
                    <div className='p-4 text-2xl text-blue-500 border-b-2 border-b-gray-200 hover:border-b-gray-700 cursor-pointer'>ABOUT</div>
                    <div className='p-4 text-2xl text-blue-500 border-b-2 border-b-gray-200 hover:border-b-gray-700 cursor-pointer'>CONTACT</div>
                </div>
                <HiMenuAlt3 className='text-3xl block md:hidden'/>
            </section>
    )
}

export default NavSide