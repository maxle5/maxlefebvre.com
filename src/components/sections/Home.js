import React from 'react'

export default function Home() {
    return (
        <section id='home' className='pb-0'>
            <div className='container h-100 p-relative'>
                <div>
                    <h1 className='text-title text-center my-0 text-primary'>I'm Max</h1>
                    <p className='mt-0 mx-auto text-primary text-center text-heading'>
                        [software developer]
                    </p>
                </div>

                <div className='p-absolute w-100' style={{ bottom: 0 }}>
                    <img className='mx-auto d-block w-100' src={process.env.PUBLIC_URL + '/images/land.svg'} alt='digital landscape'></img>
                </div>
            </div>
        </section>
    )
}
