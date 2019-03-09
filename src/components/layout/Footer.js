import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='container d-flex flex-column'>
                <div className='text-center' style={{ marginBottom: '10px' }}>
                    <a href='https://www.github.com/maxle5' target='_blank'><i className='fab fa-github'></i></a>
                    <a href='https://www.github.com/maxle5' target='_blank'><i className='fab fa-linkedin-in'></i></a>
                    <a href='https://twitter.com/maxle5' target='_blank'><i className='fab fa-twitter'></i></a>
                    <a href='mailto:max-lefebvre@live.com'><i className='fas fa-envelope'></i></a>
                </div>
                <div className='text-center text-small text-primary'>
                    &copy; {new Date().getFullYear()} Max Lefebvre. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
