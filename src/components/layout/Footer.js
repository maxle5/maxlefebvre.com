import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='container d-flex flex-column'>
                <div className='text-center' style={{ marginBottom: '10px' }}>
                    <a rel="noopener" aria-label="Connect with me on Github" href='https://www.github.com/maxle5' target='_blank'><i className='fab fa-github'></i></a>
                    <a rel="noopener" aria-label="Connect with me on LinkedIn" href='https://www.github.com/maxle5' target='_blank'><i className='fab fa-linkedin-in'></i></a>
                    <a rel="noopener" aria-label="Connect with me on Twitter" href='https://twitter.com/maxle5' target='_blank'><i className='fab fa-twitter'></i></a>
                    <a rel="noopener" aria-label="Connect with me via Email" href='mailto:max-lefebvre@live.com'><i className='fas fa-envelope'></i></a>
                </div>
                <div className='text-center text-small text-primary'>
                    &copy; {new Date().getFullYear()} Max Lefebvre. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
