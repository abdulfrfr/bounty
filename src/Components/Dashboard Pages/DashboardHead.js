import {useState} from 'react'

function DashboardHead(){
    const [search, setSearch] = useState("")
    return(
        <section>
            <input className="w-[55vw] p-2 rounded-xl outline-blue-500" type="text" name='search' placeholder='Search' value={search} />
        </section>
    )
}

export default DashboardHead