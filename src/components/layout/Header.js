import React from 'react'

export default function Header() {
    return (
        <header>
            <div className='container d-flex justify-content-between align-items-center'>
                <img className='icon' src='/images/icon.png' />
                <div>
                    <a href='#about' className='active'>about</a>
                    <a href='#work'>work</a>
                    <a href='#blog'>blog</a>
                </div>
            </div>
        </header>
    )
}
