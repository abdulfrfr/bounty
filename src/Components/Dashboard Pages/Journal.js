import { useReducer, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaChevronDown} from 'react-icons/fa'
import {CiEdit} from 'react-icons/ci'
import { Journalitem } from './JournalItems'
import ContentEditable from 'react-contenteditable'

function reducer(){

}

function Journal({showEdit, setShowEdit}){
    const [journal, dispatch] = useReducer(reducer, Journalitem)
    const [isShow, setIsShow] = useState(false)
    
    const date = new Date()
    const theDate = date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return(
        <section className="relative md:pt-28 sm:pt-16 pt-5 md:pl-28 sm:pl-10 pl-2 md:pr-10 md:pb-10 w-[83vw] box-border">
            <div className="">
                <div className='font-extrabold text-3xl mb-3'>JOURNAL</div>
                <div className="lg:w-[40vw] md:w-[60vw] sm:w-[50vw] text-md">Document your life, goals and accomplishment
                to always remind yourslef of all you have gone through
                and how far you've come.</div>
            </div>
            <div className="flex items-center justify-end md:items-end border-b-2 border-gray-700 pb-2 pt-8 pr-4">
                <div className="text-sm flex items-center justify-between w-[55vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw]">
                    <div>Filter</div>
                    <div>Sort</div>
                    <div className='text-lg'><AiOutlineSearch/></div>
                    <div>
                        <button className="bg-blue-600 py-1 px-2 rounded-md flex justify-center items-center text-white"><div className='mr-1 text-white'>New</div> <FaChevronDown className='pl-1 border-l-[1px] border-black'/></button>
                    </div>
                </div>
            </div>
            <div className='sm:px-10 sm:py-5 py-3 box-border sm:text-sm text-xs'>
                {
                    journal.map((journ, index) => {
                        return(
                            <div onMouseOver={() => setIsShow(true)} onMouseOut={() => setIsShow(false)} className='flex justify-between items-center py-1 px-2 rounded-md hover:bg-gray-300 box-border'>
                                <div className='flex justify-start items-center'>
                                    <ContentEditable html={journ.title} className='outline-none'/>
                                    <CiEdit onClick={() => setShowEdit(true)} className={isShow ? 'block text-xl' : 'text-xl hidden'}/>
                                </div>
                                
                                <div className='flex justify-start items-center'>
                                    <div className='bg-purple-400 rounded-lg px-2'>{journ.tag}</div>
                                    <div className='ml-2 text-gray-400'>{theDate}</div>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )

}

export default Journal