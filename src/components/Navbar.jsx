import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index.js';
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false)

    const togglebutton = ()=>{
        console.log('Toggled');
        setisOpen(!isOpen)
    }
    

    return (
        <header className=' padding-x py-8 absolute z-10 w-full flex-wrap max-lg:relative'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={30}
                    />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                                className='font-monts errat leading-normal text-lg text-slate-gray hover:text-black'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className=' font-mont border border-black rounded-md  p-2 text-lg max-lg:hidden mr-1 font-semibold text-slate-gray hover:text-black cursor-pointer'>Sign In / Login In</div>
                <div className='hidden max-lg:block'>
                    <img src={hamburger}
                     alt="hamburger" 
                     width={25}
                     height={25}
                     onClick={togglebutton}
                     />
                </div>
            </nav>
            {isOpen && (
                <div className='hidden max-lg:block'>
                    <div className='flex flex-col items-end text-slate-gray font-montserrat p-2 hover:text-black cursor-pointer'>
                        <ul className=''>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href}
                                    className='font-monts errat leading-normal text-lg text-slate-gray '
                                    onClick={()=> setisOpen(!isOpen)}
                                    >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li><a href="/">Sign In / Login In</a></li>
                    </ul>
                    {/* <div className=' font-montserrat'>Sign In / Login In</div> */}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar