import {useState} from 'react'
import Logo from "./Logo"
import {BsPlusLg} from 'react-icons/bs'
import Items from './DashboardItems'

function Dashboard(){
    const [trans, setTrans] = useState(false)
    const [page, setPage] = useState(Items.filter((item, index) => index === 0))

    function getPage(indx){
       const newPage = Items.filter((item, index) => index === indx )

       setPage(newPage)
    }

    function changeTrans(){
        setTrans(!trans)
    }
    return(
        <section className="bg-zinc-200 relative overflow-hidden">
        <div className=''>
            <div className="flex justtify-start items-start">
                <div className="py-7 w-[17vw] h-[70vh] flex flex-col justify-between items-center">    
                    <Logo className=' px-5'/>
                    <button onClick={changeTrans} className="flex  justify-center md:justify-between items-center md:w-[13vw] rounded-[50%] md:rounded-3xl border-2 border-gray-300 bg-gray-200 md:px-5 md:py-2 px-2 w-[3rem] h-[3rem] text-gray-700"><div className='text-lg md:block hidden'>Compose</div><BsPlusLg className="text-2xl font-bold"/></button>
                    <div className='h-[30vh] flex flex-col justify-between items-center'>
                        {
                         Items.map((item, index) => {
                                return(
                                    <div onClick={() => getPage(index)} className='flex justify-center md:justify-start items-center w-[20vw] md:w-[17vw] px-2 md:px-10'>
                                        <item.icon className='md:text-md text-xl'/>
                                        <div className='text-md ml-3 md:block hidden'>{item.title}</div> 
                                
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-[83vw] h-[100vh]">
                    {
                        page.map((pg, index) => {
                            return(
                                <section><pg.page/></section>
                            )
                        })
                    }
                </div>
            </div> 
        </div>
        <div className={!trans ? 'translate-x-[95rem] transition-all duration-300 delay-100 bg-green-500 w-[83vw] h-[80vh] flex justify-center items-center absolute bottom-0 right-0rounded-t-3xl ' : 'rounded-t-3xl translate-x-[0] transition-all bg-green-500 w-[83vw] h-[80vh] flex justify-center items-center absolute bottom-0 right-0'}></div>
        </section>
    )
}

export default Dashboard