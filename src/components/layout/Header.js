import React from 'react'

export default function Header() {
    return (
        <header>
            <div className='container d-flex justify-content-between'>
                <div>icon</div>
                <div>
                    <a href='#about'>about</a>
                    <a href='#work'>work</a>
                    <a href='#blog'>blog</a>
                </div>
            </div>
        </header>
    )
}
