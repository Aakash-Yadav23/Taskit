import React from 'react'

const MaxWidthWraapper = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <div className={` py-20  w-full h-full  px-5  md:px-20 flex flex-col justify-stasrt items-center  ${className}`}>
            {children}
        </div>
    )
}

export default MaxWidthWraapper
