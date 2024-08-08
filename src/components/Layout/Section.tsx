import React from 'react';

interface Props {
    setFormVisible: any;
}

const Section: React.FC<Props> = () => {
    return (
        <div className='h-screen w-full text-gray-900 bg-gray-100 flex items-center justify-center'>
            <div className='bg-white shadow-xl rounded-lg flex overflow-hidden max-w-5xl'>
                <div className='flex-1'>
                    <img src="/qq.jpeg" alt="Printing Machine" className='w-full h-full object-cover' />
                </div>
                <div className='flex-1 bg-white p-10 text-center flex flex-col justify-center'>
                    <h2 className='text-lg font-semibold mb-4 text-gray-700'>WELCOME</h2>
                    <h3 className='text-3xl font-bold mb-4 text-gray-900'>Print Your Publishing Book</h3>
                    <p className='mb-8 text-gray-600'>High-quality printing services for all your needs</p>
                    <button className='bg-gray-800 text-white px-6 py-2 mb-2 rounded hover:bg-gray-900 transition duration-300'>CONTACT NOW</button>
                    <button className='bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition duration-300'>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
}

export default Section;
