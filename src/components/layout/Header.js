import React from 'react'

export default function Header() {
    return (
        <header>
            <div className='container d-flex justify-content-between align-items-center'>
                <a href="#root">
                    <img className='icon' src={process.env.PUBLIC_URL + '/images/avatar-smile-65x65.png'} alt='bitmoji avatar smiling' />
                </a>
                <div>
                    <a href='#about' className='text-heading'>about</a>
                    <a href='#experience' className='text-heading'>experience</a>
                    <a href='#projects' className='text-heading'>projects</a>
                </div>
            </div>
        </header>
    )
}
