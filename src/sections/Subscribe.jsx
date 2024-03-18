import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='flex justify-center items-center max-container max-lg:flex-col gap-10' id='contact-us'>
      <h3 className='text-4xl leading-[68px] font-bold font-palanquin lg:max-w-md text-center'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletters
      </h3>
      <div className=' lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2 sm:border sm:border-slate-gray rounded-full'>
        <input 
        type="text" 
        className="input" 
        placeholder="subscribe@nike.com"
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe