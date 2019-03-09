import React from 'react'

export default function Header() {
    return (
        <header>
            <div className='container d-flex justify-content-between align-items-center'>
                <img className='icon' src={process.env.PUBLIC_URL + '/images/icon.png'} />
                <div>
                    <a href='#about' className='active text-heading'>about</a>
                    <a href='#work' className='text-heading'>work</a>
                    <a href='#blog' className='text-heading'>blog</a>
                </div>
            </div>
        </header>
    )
}
