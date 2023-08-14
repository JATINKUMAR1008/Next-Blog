import React from 'react'
import tech from '../assets/tech.jpg'
import men from '../assets/men.jpg'
const Card = ({item}) => {
  return (
    <div className='w-full my-10'>
        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col'>
                <span className='flex items-center gap-2'>
                    <img src={men.src} className='w-8 h-8 rounded-full'/>
                    <p className='font-thin  text-sm'>William Lewis</p>
                </span>
                <h3 className='font-bold text-lg'>
                    Introduction to new world.
                </h3>
                <p className='text-md text-gray-800 hidden sm:block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className='flex items-center gap-2 font-thin text-sm mt-2'>
                    <span>
                        Aug 8
                    </span>
                    <span>
                        7 min read
                    </span>
                </div>
            </div>
            <img src={tech.src} className='w-1/3 object-cover h-[7rem] sm:[h-10rem]'/>
        </div>
    </div>
  )
}

export default Card