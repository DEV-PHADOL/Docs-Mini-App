import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


const Cards = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag = {{scale:1.1}} 
    className='relative flex-shrink-0 overflow-hidden w-[200px] h-[240px] bg-zinc-700/90 rounded-[30px] px-8 py-6 text-white'>
        <FaRegFileAlt className='text-2xl'/>
        <p className='text-xs font-sans font-semibold leading-tight mt-5 '>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between py-1 px-5 mb-2'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-400 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose />: <FaDownload size=".7em" color='#000'/>}
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag flex items-center justify-center w-full h-9 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"}`}>
                    <h3 className='text-sm font-sans font-bold '>{data.tag.tagTitle}</h3>
                </div>
            ) }
        </div>
    </motion.div>
  )
}

export default Cards