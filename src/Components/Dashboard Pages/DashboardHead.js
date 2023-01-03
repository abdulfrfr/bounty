import {useState} from 'react'

function DashboardHead(){
    const date = new Date()

    const fullDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    const [search, setSearch] = useState("")
    return(
        <section className= 'flex justify-between items-center'>
            <input className="w-[55vw] p-2 rounded-xl outline-blue-500" type="text" name='search' placeholder='Search' value={search} />
            <div className='text-gray-500 text-xs md:text-sm'>{fullDate}</div>
        </section>
    )
}

export default DashboardHead