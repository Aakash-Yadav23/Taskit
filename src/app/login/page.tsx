import React from 'react'
import img from '@/assets/image/fantasy-shooting-star-landscape-night.jpg';
import Image from 'next/image';
import { Auth } from '@/components/auth/Auth';


const page = () => {
    return (
        <div className='grid grid h-screen md:grid-cols-2'>

            <div className="login-page flex flex-col gap-2 justify-center items-center p-5 md:p-10">
                <h1 className='text-4xl font-black'>Taskit</h1>
                <p className='text-center flex text-2xl flex-col gap-1'>
                    Welcome to Taskit!
                    <span className='text-center text-gray-600 text-sm'>
                        A Task Manager Software!
                    </span>

                </p>
                <div className="pt-5">

                    <Auth />
                </div>
            </div >

            <div className="bg- hidden md:block h-full">
                <Image alt='bg' height={1000} width={1000} className='object-cover w-full h-full' src={img.src} />
            </div>

        </div >
    )
}

export default page
