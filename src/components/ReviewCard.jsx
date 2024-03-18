import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({customerName,rating,imgURL,feedback}) => {
  return (
    <div className=' flex justify-center items-center flex-col p-4 bg-pale-blue rounded-[30px] shadow-3xl hover:scale-105 hover:duration-200 hover:delay-200'>
        <img 
        src={imgURL} 
        alt="profileimage"
        className=' w-[120px] h-[120px] rounded-full object-cover' 
        />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='flex gap-2.5 mt-3 justify-center items-center'>
            <img 
            src={star} 
            alt="rating" 
            className=' object-contain m-0'
            />
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <p className=' mt-1 text-3xl font-bold text-center font-palanquin'>{customerName}</p>
    </div>
  )
}

export default ReviewCard