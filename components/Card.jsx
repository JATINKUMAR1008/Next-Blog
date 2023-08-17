import React from 'react'
import tech from '../assets/new.jpg'
import men from '../assets/men.jpg'
import { ClassificationType } from 'typescript'
const Card = ({item}) => {
  return (
    <div className='grid grid-cols-[0.7fr_1.1fr]  gap-5 mb-[35px]'>
        <div className=''>

        <img src={tech.src} className=''/>
        </div>
        <div>

        <h2 className='font-semibold m-0 sm:text-[1.5rem] text-[1.1rem] leading-6'>Welcome to new world ME.</h2>
        <p className='flex flex-col sm:flex-row sm:gap-2 my-2 text-[#888] font-bold text-[.7rem]'>
            <a href="" className='text-[#333]'>Dawid Paszko</a>
            <time>2023-01-06 16:45</time>
        </p>
        <p className='hidden sm:block my-1 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officiis earum, accusantium officia voluptates vitae? Quam recusandae quasi distinctio voluptatem.</p>
        </div>
    </div>
  )
}

export default Card