import DashboardHead from './DashboardHead'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
function Saved(){
    return(
        <section className='p-5'>
            <div className='text-gray-700 text-4xl text-extrabold pb-3'>Saved</div>
            <DashboardHead/>

            <div className='mt-5'>
                <div className='w-[83vw] border-b-2 border-b-gray-400 text-xl pl-3 pt-3 pb-2 flex justify-between items-center'>
                    <div>Tasks</div>
                    <div className='text-sm text-gray-700 flex justify-between items-center w-[30vw] md:w-[8vw] md:mr-20'>
                        <div>Filter</div>
                        <div>Sort</div>
                        <div><AiOutlinePlus/></div>
                        <div><BsThreeDots/></div>
                    </div>
                </div>
                <div className='bg-white w-[83vw] p-2'>
                    <div className='flex justify-between items-center w-[60vw] md:w-[50vw]'>
                        <div className='bg-blue-200 py-1 px-2 rounded-lg'>ToDos</div>
                        <div className='bg-pink-200 py-1 px-2 rounded-lg'>Doing</div>
                        <div className='bg-green-200 py-1 px-2 rounded-lg'>Done</div>
                    </div>
                </div>
                
            </div>
        </section>
    )

}

export default Saved