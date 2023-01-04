import {MdOutlineImage} from 'react-icons/md'
import ContentEditable from 'react-contenteditable'

function BlogPost(){
    const test = 'Notion Tip: Use this template to write quick notes you can reference later and quickly create a rich document. You can embed links, images, to-do’s, and more.'
    return(
        <section>
            <div className="flex justify-center items-center w-[83vw]">
                <div className="p-4 flex justify-between items-center w-[80vw] text-gray-700">
                    <div className="text-2xl font-bold">Quick Note</div>
                    <div className="cursor-pointer bg-gray-600 py-2 px-4 text-white rounded-xl">Saved</div>
                </div>
            </div>
            
            <div className="bg-white mt-4 w-[83vw] h-[1000vh] px-4 py-4 overflow-y-scroll overflow-hidden lg:overflow-hidden">
                <div>
                    <label className="cursor-pointer flex justity-start items-center text-gray-400" for="image-upload"><MdOutlineImage className='text-xl'/> add cover</label>
                    <input id="image-upload" className="opacity-0 absolute z-[-1]" type='file' name='img' />
                </div>
                <div>
                    <input className="text-5xl w-[81vw] px-4 py-4 outline-none" type='text' name='title' placeholder="Untitle" />
                </div>
                <div className='flex justify-center items-center w-[83vw]'>
                    <div className='w-[60vw]'>
                        <div className='flex justify-center items-center'>
                            <div className='flex justify-start items-start text-gray-800 bg-gray-200 rounded-lg p-4 lg:w-[60vw] w-[80vw] box-border'>
                                <div>💡</div>
                            <ContentEditable html={test} className='outline-none ml-2'/>
                            </div>
                        </div>
                        <div>
                            <ContentEditable html='Add Some Text' className='outline-none text-3xl pt-5 pb-4 border-b-2 border-gray-200 text-gray-700'/>
                            <ContentEditable html='Add here...' className='pt-2 outline-none'/>
                        </div>
                        <div className='mt-7'>
                            <div>
                                <div>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value=""/>
                                    <label for="vehicle1"> Eat Lunch</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value=""/>
                                    <label for="vehicle2"> Have a break</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value=""/>
                                    <label for="vehicle3"> Going to my friend's</label>
                                </div>   
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
                {/*  */}
            
        </section>
    )

}

export default BlogPost