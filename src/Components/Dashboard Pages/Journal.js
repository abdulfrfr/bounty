function Journal(){
    return(
        <section className="md:pt-28 sm:pt-16 pt-5 md:pl-28 sm:pl-10 pl-2 md:pr-10 md:pb-10 w-[83vw] box-border">
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
                    <div>Search</div>
                    <div>
                        <button className="bg-blue-600 py-1 px-2 rounded-md">New</button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Journal