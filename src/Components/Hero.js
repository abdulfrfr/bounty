import { useEffect, useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import NavSide from './NavSide'




function Hero({navs, setNavs, Page, setPage, styl, setStyl}){

    return(
        <section className="bg-gray-200">
            <NavSide navs={navs} setNavs={setNavs} Page={Page} setPage={setPage} setStyl={setStyl} styl={styl}/>
            <section>
                <section>
                 {Page.map((res, index) => {

                    return(
                        <res.page key={index}/>
                    )
                })}
                </section>
            </section>
        </section>
    )
}

export default Hero