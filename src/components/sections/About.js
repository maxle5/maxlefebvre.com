import React from 'react'

export default function About() {
    return (
        <section id='about' className='container'>
            <img className='icon d-block mx-auto' src={process.env.PUBLIC_URL + '/images/avatar-neutral.png'} alt='bitmoji avatar' />
            <h2 className='text-center text-primary'>{'{'} about me {'}'}</h2>
            <p className='mx-auto text-full'>
                I'm a software developer from Halifax, NS with a passion for
                learning new tools and technologies. Currently having fun using
                React, .NET Core, PWAs, microservices, and more.
            </p>
        </section>
    )
}
