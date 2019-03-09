import React from 'react'

export default function About() {
    return (
        <section id='about' className='container'>
            <img className='icon d-block mx-auto' src={process.env.PUBLIC_URL + '/images/avatar-neutral.png'} />
            <h2 className='text-center text-primary'>{'{'} about me {'}'}</h2>
            <p className='mx-auto text-center'>
                I'm a software developer from Halifax, NS with a passion for
                learning. Currently having fun using technologies such as React,
                .NET Core, microservices, PWAs, and more.
            </p>
            <p className='mx-auto text-center'>

            </p>
        </section>
    )
}
