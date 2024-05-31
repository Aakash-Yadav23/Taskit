import Onboarding from '@/components/layout/OnBoarding'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className="flex flex-col gap-2">

                <h1 className='text-4xl font-bold text-center'>
                    Welcome Akash!
                </h1>

                <p className='text-gray-500 text-center'>
                    Kindly Fill these Data for better experience!
                </p>

            </div>
            <Onboarding />
        </div>
    )
}

export default page
