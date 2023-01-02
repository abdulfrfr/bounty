import Logo from "./Logo"
import {BsPlusLg} from 'react-icons/bs'
import Items from './DashboardItems'

function Dashboard(){
    return(
        <section className="bg-gray-100 relative">
        <div className=''>
            <div className="flex justtify-start items-start">
                <div className="py-7 w-[17vw] h-[70vh] flex flex-col justify-between items-center">
                    <Logo className=' px-5'/>
                    <button className="flex justify-between items-center w-[13vw] rounded-3xl border-2 border-gray-300 bg-gray-200 px-5 py-2 text-gray-700"><div className='text-lg'>Compose</div><BsPlusLg className=" text-2xl font-bold"/></button>
                    <div className='h-[30vh] flex flex-col justify-between items-center'>
                        {
                         Items.map((item, index) => {
                                return(
                                    <div className='flex justify-start items-center w-[17vw] px-10'>
                                        <item.icon className='text-md'/>
                                        <div className='text-md ml-3'>{item.title}</div> 
                                
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-[83vw] h-[100vh]"></div>
            </div> 
        </div>
        <div className=' hidden bg-white w-[50vw] h-[50vh] flex justify-center items-center absolute bottom-0 right-0'></div>
        </section>
    )
}

export default Dashboard