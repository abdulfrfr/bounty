import {FaTimes} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsPlusLg} from 'react-icons/bs'

export const Todo = [
    {
        name: "ToDo",
        nameStyle: 'bg-blue-200 flex box-border justify-center items-center py-1 px-0 text-sm rounded-lg my-2 text-xs md:text-sm',
        addIcon: AiOutlinePlus,
        addDivStyle: 'flex justify-start box-border text-sm md:text-md items-center text-gray-400 cursor-pointer',
        iconStyle: "mr-2 text-sm box-border md:text-md",
        addBtnIcon:BsPlusLg,
        removeBtnIcon:FaTimes,
        addBtnStyle: 'cursor-pointer box-border text-lg text-gray-500 ml-1',
        removeBtnStyle: 'cursor-pointer box-border text-lg text-gray-500 ml-1',
        inputStyle: 'w-[65vw] p-1 rounded-xl box-border outline-gray-700 border-2 border-gray-600',
        inputDivStyle: 'flex justify-between items-center',
        inputs: []
    },
    {
        name: "Doing",
        nameStyle: 'bg-pink-200 flex box-border justify-center items-center py-1 px-3 text-sm rounded-lg my-2 text-xs md:text-sm',
        addIcon: AiOutlinePlus,
        addDivStyle: 'flex justify-start box-border text-sm md:text-md items-center text-gray-400 cursor-pointer',
        iconStyle: "mr-2 text-sm box-border md:text-md",
        addBtnIcon:BsPlusLg,
        removeBtnIcon:FaTimes,
        addBtnStyle: 'cursor-pointer box-border text-lg text-gray-500 ml-1',
        removeBtnStyle: 'cursor-pointer box-border text-lg text-gray-500 ml-1',
        inputStyle: 'w-[65vw] p-1 rounded-xl box-border outline-gray-700 border-2 border-gray-600',
        inputDivStyle: 'flex justify-between items-center',
        inputs: []
    },
    {
        name: "Done",
        nameStyle: 'bg-green-200 box-border flex justify-center items-center py-1 px-3 text-sm rounded-lg my-2 text-xs md:text-sm',
        addIcon: AiOutlinePlus,
        addDivStyle: 'flex box-border justify-start text-sm md:text-md items-center text-gray-400 cursor-pointer',
        iconStyle: "mr-2 box-border text-sm md:text-md",
        addBtnIcon:BsPlusLg,
        removeBtnIcon:FaTimes,
        addBtnStyle: 'cursor-pointer box-border text-lg text-gray-500 ml-1',
        removeBtnStyle: 'cursor-pointer box-border text-lg text-gray-500 ml-1',
        inputStyle: 'w-[65vw] box-border p-1 rounded-xl outline-gray-700 border-2 border-gray-600',
        inputDivStyle: 'flex justify-between items-center',
        inputs: []
    },
    
]



export default Todo