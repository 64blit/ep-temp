import React, { useRef } from 'react';

import logo1 from '../../assets/eyepop_octo.png';
import logo2 from '../../assets/2024-Cool-Company-Badge.png';

const Logos = () =>
{

    const cameraModalRef = useRef();

    return (
        <>
            <div className="flex flex-col w-[10rem] m-5">
                <img src={logo1} alt="eyepop" className='transition-all hover:scale-125 scale-90 cursor-pointer'
                    onClick={() =>
                    {
                        if (!cameraModalRef.current.showModal) return;

                        cameraModalRef.current.showModal();
                    }} />

                <img src={logo2} alt="cool company" className='transition-all hover:scale-125 scale-100' />
            </div>

            <dialog id="my_modal_1" ref={cameraModalRef} className="modal z-10">
                <div className="modal-box text-white flex flex-col w-7/12 h-[30rem] max-w-5xl justify-center items-center bg-gray-700" >

                    <iframe style={{ width: '100%', height: '100%' }} src="https://www.youtube.com/embed/lEIXySpfF5E?si=wmx-wBAQ9NJuuYVo" className='rounded-2xl' title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                </div>

                <form method="dialog" className="modal-backdrop opacity-80 bg-gray-950">
                    <button>close</button>
                </form>
            </dialog>

        </>
    );
}

export default Logos;
