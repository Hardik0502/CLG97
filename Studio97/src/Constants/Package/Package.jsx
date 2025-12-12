import React from 'react'

const Package = () => {
    let Packages = [
        {
            pkgno: 1,
            pkgname: 'Baby Shower',
            price: 15000,
            img: 'https://plus.unsplash.com/premium_photo-1675851210020-045950ac0215?q=80&w=373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            pkgno: 2,
            pkgname: 'Pre-Wedding',
            price: 30000,
            img: 'https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            pkgno: 3,
            pkgname: 'Birthday Shoot',
            price: 10000,
            img: 'https://plus.unsplash.com/premium_photo-1673897888993-a1db844c2ca1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            pkgno: 4,
            pkgname: 'Wedding',
            price: 120000,
            img: 'https://plus.unsplash.com/premium_photo-1675003662150-2569448d2b3b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            pkgno: 5,
            pkgname: 'Wedding',
            price: 120000,
            img: 'https://plus.unsplash.com/premium_photo-1675003662150-2569448d2b3b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    ];



    return (
        <div className="">
            <div className="package flex justify-around flex-wrap grid-rows-2 mb-20 p-12 ">
                {Packages.map((pkg) => {
                    return <div key={pkg.pkgno} className='pkg border-2 h-[30vw] w-[30vw] mb-2 p-12 rounded-4xl ' >
                        <img src={pkg.img} className=' h-[20vw] rounded-2xl p-10 w-full' alt={pkg.pkgname} />
                        <h1> {pkg.pkgname} </h1>
                        <h2> {pkg.price} </h2>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Package