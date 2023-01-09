import {useState} from 'react'
import DashboardHead from './DashboardHead'
import {BsCheckLg, BsClipboardData} from 'react-icons/bs'
import  TodoItems  from './TodoItems'

function Todo(){

    const [addInput, setAddInput] = useState("")
    const [indx, setIndx] = useState(null)

    function getInput(event){ 
        const value = event.target.value
        setAddInput(value)    
    }
    function showInput(index){
            setIndx(index)    
    }
    function getAddBtn(index, inputs){
        if(addInput === ""){
            setAddInput("")
            setIndx(index)

        } else {
            inputs.push(addInput)
            setAddInput("")
            setIndx(null)
        }   
    }

    function getAddBtnMinus(){
        setIndx(null)    
    }

    return(
        <section className='p-5'>
            <div className='box-border text-gray-700 text-lg text-extrabold pb-3'><div>Task List</div></div>
            <DashboardHead/>

            <div className='mt-5'>
                <div className='box-borderw-[83vw]text-xl pl-3 pt-3 flex justify-between items-center'>
                    

                    <div>
                        <div className='box-border flex justify-start items-center text-5xl mb-3'><BsCheckLg className='mr-4'/>Task</div>
                        <div className='md:text-[1rem] line-0 text-[0.7rem]'>

                            <div>Use this template to track your personal tasks.</div>
                            <div>Click <span className='text-red-700 bg-red-200 p-1 rounded-lg'>+ New</span> to create a new task directly on this board.</div>
                            <div>Click an existing task to add additional context or subtasks.</div>
                        </div>
                    </div>
                </div>
                
                <div className='md:mt-4 mt-2 text-gray-700 flex justify-between items-center md:mr-20 border-b-2 border-b-gray-400 box-border w-[83vw]'>
                    <div className='text-xl font-extrabold flex justify-start items-center px-4 md:py-2 py-1 box-border'><BsClipboardData className='mr-2'/>Board</div>       
                </div>
                <div className='md:overflow-hidden overflow-x-scroll overflow-auto bg-white w-[83vw] h-[100vh] px-2'>
                    <div className='flex justify-between items-start w-[300vw] h-[600rem] md:w-[75vw] p-4'>
                        {
                            TodoItems.map((todo, index) => {
                                return (
                                    <div className='md:w-[20vw] w-[70vw]'>
                                        <div className={todo.nameStyle}>
                                            <div className=''>{todo.name}</div>
                                        </div>
                                        <div onClick={() => showInput(index)} className={index === indx ? 'hidden' : `${todo.addDivStyle}`}><todo.addIcon className={todo.iconStyle}/> New</div>
                                        <div className= {index === indx ? `${todo.inputDivStyle}` : 'hidden'}>
                                            <input onChange={getInput} className={todo.inputStyle} type='text' name='add' placeholder='' value={addInput}/>
                                            <div className='flex justify-between items-center'>
                                                <todo.addBtnIcon onClick={() => getAddBtn(index, todo.inputs)} className={todo.addBtnStyle}/>
                                                <todo.removeBtnIcon onClick={getAddBtnMinus} className={todo.removeBtnStyle}/>
                                            </div>
                                            
                                        </div>
                                        {
                                            todo.inputs.map((input, index) => {
                                                return(
                                                    <div className='break-all box-border'>{input}</div>
                                                )
                                            })
                                        }
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