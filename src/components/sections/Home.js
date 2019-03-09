import React from 'react'

export default function Home() {
    return (
        <section id='home' className='pb-0'>
            <div className='container h-100 p-relative'>
                <h1 className='text-title text-center my-0 text-primary'>I'm Max.</h1>
                <p className='mt-0 text-primary text-center'>a software developer.</p>

                <div className='p-absolute w-100' style={{ bottom: 0 }}>
                    <img className='mx-auto d-block w-100' src="http://seanhalpin.io/assets/img/content/home/masthead/land.svg"></img>
                </div>
            </div>
        </section>
    )
}
