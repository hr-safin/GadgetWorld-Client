import React from 'react';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const UpArraow2 = () => {

    const handleUp = () => {
        window.scrollTo({top : 0, left : 0, behavior : "smooth"})
    }
    return (
        <div onClick={handleUp} className=' cursor-pointer flex justify-end text-3xl text-blue-500 px-10 absolute -bottom-52 right-0 pt-4'>
            <BsFillArrowUpCircleFill />
        </div>
    );
};

export default UpArraow2;