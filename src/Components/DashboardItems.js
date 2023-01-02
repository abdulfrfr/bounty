
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'
import {MdOutlineRestorePage, MdOutlineDrafts, MdLabelImportantOutline} from 'react-icons/md'
import Saved from './Dashboard Pages/Saved'
import Starred from './Dashboard Pages/Starred'
import Drafts from './Dashboard Pages/Drafts'
import Snoozed from './Dashboard Pages/Snoozed'
import Important from './Dashboard Pages/Important'

const items =[
    {
        title: "Saved",
        icon: MdOutlineRestorePage,
        page: Saved,
     
},
    {
        title: "Starred",
        icon: AiOutlineStar,
        page: Starred,
     
},
    {
        title: "Drafts",
        icon: MdOutlineDrafts,
        page: Drafts,
     
},
    {
        title: "Snoozed",
        icon: BiTimeFive,
        page: Snoozed,
     
},
    {
        title: "Important",
        icon: MdLabelImportantOutline,
        page: Important,
     
},

]

export default items