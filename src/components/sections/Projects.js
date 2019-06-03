import React from 'react'

export default function Projects() {
    return (
        <section id='projects' className='container'>
            <h2 className='text-center text-primary'>{'{'} work samples {'}'}</h2>
            <p className='mx-auto text-center'>
                Here are a few samples of some of my previous work.
            </p>
            <div className='d-flex justify-content-around'>
                <a href="https://maxle5.github.io/weather-js/" target="_blank" rel="noopener noreferrer" className="card" title='this is a simple 5 day weather application'>
                    <i className="fa fas fa-fw fa-lg fa-cloud"></i>
                    Weather.JS
                </a>


                <a href='https://maxle5.github.io/dropjs-demo/' target="_blank" rel="noopener noreferrer" className='card' title='this is a jquery extension that easily allows you to "Drag + Drop" custom images onto a Google Map.'>
                    <i className='fa fas fa-fw fa-lg fa-map-marker'></i>
                    Drop.JS
                </a>
                    
                <a href='https://nscc-my.sharepoint.com/:b:/g/personal/w0241576_campus_nscc_ca/EcHvMr8iw1FKg2BeebwqEPoB4knHFslbJYqmcV0PveAKHA?e=24sB97' className='card card-body'>
                    <i className='fa fas fa-fw fa-lg fa-file-user'></i>
                    My Resume
                </a>
            </div>
            <p className='mx-auto text-full italic'>
                **This website was built with React, fontawesome, SASS, GitHub Pages, and more!
            </p>
        </section>
    )
}
