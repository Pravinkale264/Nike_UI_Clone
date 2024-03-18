import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px] hover:-rotate-90 ' />
        <div className='mt-6 flex justify-start gap-2.5'>
            <img src={star} alt="star" height={24} width={24}/>
            <p className=' font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='mt-2 font-semibold font-palanquin leading-normal text-2xl'>{name}</h3>
        <p className=' mt-1 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard