import { Link } from "react-router-dom"
function Logo({navs, setPage, setStyl}){
    function getHome(){
        const newArr = navs.filter((page, indx) => indx === 0)  
        setPage(newArr)
        setStyl(0)
    }
    return(
        <section>
            <Link to="/">
                    <div onClick={getHome} className="hidden md:flex md:justify-center md:items-center text-2xl md:text-3xl text-blue-500 font-extrabold">BOUNTY</div>
                    <div onClick={getHome} className="md:hidden flex justify-center items-center text-4xl md:text-3xl text-blue-500 font-extrabold">B</div>
            </Link>
        </section>
    )
}

export default Logo