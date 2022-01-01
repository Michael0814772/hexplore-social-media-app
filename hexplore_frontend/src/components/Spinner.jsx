import React from 'react';
import Loader from 'react-loader-spinner';
import loader from '../assets/Hexplore-animation.mp4'


const Spinner = ({ message }) => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* <Loader
            type='Circles'
            color='#00BFFF'
            height={50}
            width={200}
            className='m-5' 
            /> */}
            <video
                    src={loader}
                    type='video/mp4'
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-20 h-20 m-5'
            />

            <p className='text-lg text-center px-2'>{message}</p>
        </div>
    )
}

export default Spinner
