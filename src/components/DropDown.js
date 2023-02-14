import React,{ useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

const DropDown = () => {
  const [isOpen, setIsOpen] =useState(false)
  return (
    <div className='relative flex flex-col items-center'>
        <button className='flex flex-row items-center justify-center'
        onClick = {() => setIsOpen((isOpen) => !isOpen)}
        >Shop
        {isOpen ? <AiOutlineCaretUp className='ml-1'/> : <AiOutlineCaretDown className='ml-1'/>}
        </button>
        <div className={`absolute top-10 bg-rose-800/80 w-40 h-40 flex flex-col items-center justify-center rounded shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
            <a href='/flowers' className='text-white text-center'>Flowers</a>
            <hr className='w-3/4 my-2'/>
            <a href='/plants' className='text-white text-center'>Plants</a>
            <hr className='w-3/4 my-2'/>
            <a href='/gifts' className='text-white text-center'>Gifts</a>
        </div>
    </div>
  )
}

export default DropDown
