import React, { useRef } from 'react'
import Cards from './Cards'

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cumque.",
    filesize:".9mb",
    close: true,
    tag:{isOpen: true,tagTitle:"Download Now",tagColor:"green"},
    },
    {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cumque.",
    filesize:".9mb",
    close: true,
    tag:{isOpen: false,tagTitle:"Download Now",tagColor:"blue"},
    },
    {
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cumque.",
    filesize:".9mb",
    close: true,
    tag:{isOpen: true,tagTitle:"Upload",tagColor:"blue"},
    },
    
];
  return (
    <div ref={ref} className='fixed p-5 z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-10'>
        {data.map((item,index)=>(
          <Cards data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground