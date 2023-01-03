import {useState} from 'react'
import DashboardHead from './DashboardHead'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsThreeDots, BsCheckLg, BsClipboardData, BsPlusLg} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'
import  TodoItems  from './TodoItems'
function Todo(){

    const [show, setShow] = useState(false)
    function showInput(){
        setShow(true)
    }
    function getAddBtn(){
        setShow(false)
    }
    return(
        <section className='p-5'>
            <div className='text-gray-700 text-lg text-extrabold pb-3'><div>Task List</div></div>
            <DashboardHead/>

            <div className='mt-5'>
                <div className='w-[83vw]text-xl pl-3 pt-3 flex justify-between items-center'>
                    

                    <div>
                        <div className='flex justify-start items-center text-5xl mb-3'><BsCheckLg className='mr-4'/>Task</div>
                        <div className='md:text-[1rem] line-0 text-[0.7rem]'>

                            <div>Use this template to track your personal tasks.</div>
                            <div>Click <span className='text-red-700 bg-red-200 p-1 rounded-lg'>+ New</span> to create a new task directly on this board.</div>
                            <div>Click an existing task to add additional context or subtasks.</div>
                        </div>
                    </div>
                </div>
                
                <div className='md:mt-4 mt-2 text-gray-700 flex justify-between items-center md:mr-20 border-b-2 border-b-gray-400 w-[83vw]'>
                    <div className='text-xl font-extrabold flex justify-start items-center px-4 md:py-2 py-1'><BsClipboardData className='mr-2'/>Board</div>       
                </div>
                <div className='md:overflow-hidden overflow-x-scroll overflow-y-scroll bg-white w-[83vw] p-2'>
                    <div className=' flex justify-between items-start w-[300vw] h-[100vh] md:w-[75vw] p-4'>
                        {
                            TodoItems.map((todo, index) => {
                                return (
                                    <div className='md:w-[20vw] w-[70vw]'>
                                        <div className={todo.nameStyle}>
                                            <div className=''>{todo.name}</div>
                                        </div>
                                        <div onClick={showInput} className={show ? 'hidden' : `${todo.addDivStyle}`}><todo.addIcon className={todo.iconStyle}/> New</div>
                                        <div className= {show ? `${todo.inputDivStyle}` : 'hidden'}>
                                            <input className={todo.inputStyle} type='text' name='add' placeholder=''/>
                                            <div className='flex justify-between items-center'>
                                                <todo.addBtnIcon onClick={getAddBtn} className={todo.addBtnStyle}/>
                                                <todo.removeBtnIcon onClick={getAddBtn} className={todo.removeBtnStyle}/>
                                            </div>
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
            </div>
        </section>
    )

}

export default Todo