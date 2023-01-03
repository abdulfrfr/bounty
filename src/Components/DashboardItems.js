
import {GiBookshelf} from 'react-icons/gi'
import {BsJournalCheck} from 'react-icons/bs'
import {MdOutlineTask,MdOutlineArticle, MdOutlineDrafts,} from 'react-icons/md'
import Todo from './Dashboard Pages/Todo'
import BlogPost from './Dashboard Pages/BlogPost'
import Drafts from './Dashboard Pages/Drafts'
import ReadingList from './Dashboard Pages/ReadingList'
import Journal from './Dashboard Pages/Journal'

const items =[
    {
        title: "Task List",
        icon: MdOutlineTask,
        page: Todo,
     
},
    {
        title: "Quick Note",
        icon: MdOutlineArticle,
        page: BlogPost,
     
},
    {
        title: "Journal",
        icon: BsJournalCheck,
        page: Journal,
 
},
    {
        title: "Reading List",
        icon: GiBookshelf,
        page: ReadingList,
     
},
    {
        title: "Drafts",
        icon: MdOutlineDrafts,
        page: Drafts,
 
},

]

export default items


