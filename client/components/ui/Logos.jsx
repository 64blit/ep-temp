import React from 'react';

import logo1 from '../../assets/eyepop_octo.png';
import logo2 from '../../assets/2024-Cool-Company-Badge.png';

const Logos = () =>
{
    // shared classes for creating hover effect with tailwind
    const sharedClass = 'transition-all hover:scale-125';

    return (
        <div className="flex flex-col w-[10rem] m-5">
            <img src={logo1} alt="eyepop" className='transition-all hover:scale-125 scale-90' />
            <img src={logo2} alt="cool company" className='transition-all hover:scale-125 scale-100' />
        </div>

    );
}

export default Logos;   
