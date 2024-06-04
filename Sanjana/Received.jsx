import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar.jsx';

const Shares = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/some-other-page'); // virajjjj replace '/some-other-page' with the path you want to navigate to
    };

    return (
        <div className='p-[20px] flex flex-col justify-start items-start mt-3 table-d'>
            <h1 className='pl-4'>Received</h1>
            <div className='w-[100%] flex flex-col justify-start p-4'>
                <div 
                    className='flex flex-row justify-between items-center w-[80%] pl-2 cursor-pointer' 
                    onClick={handleClick}
                >
                    <input type='checkbox' />
                    <h1 className='font-medium'>CCR-PDF</h1>
                    <h1>PDF</h1>
                    <h1>13-Feb-2024</h1>
                    <h1>Sent</h1>
                    <h1>Private</h1>
                </div>
            </div>
        </div>
    );
};

function Received() {
    return (
        <div className='flex flex-row '>
            <div className='w-[20%]'>
                <Sidebar />
            </div>
            <div className='bg-[#f7f7fa] w-[80%]'>
                <div>
                    <Shares />
                </div>
            </div>
        </div>
    );
}

export default Received;
