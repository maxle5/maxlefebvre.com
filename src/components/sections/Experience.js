import React from 'react'

export default function Experience() {
    return (
        <section id='experience' className='container'>
            <h2 className='text-center text-primary'>{'{'} work experience {'}'}</h2>
            <ul className='mx-auto w-66'>
                <li>
                    <strong>Developer | Garvin-Allen Solutions Ltd. | April 2016 - Present</strong>
                    <dl>Contributed to commercial insurance software in an agile team</dl>
                    <dl>Project lead for porting to .NET Core from .NET Framework</dl>
                    <dl>Automated QA testing with the Selenium WebDriver</dl>
                    <dl>Visually represented insurance risk with the Google Maps API</dl>
                </li>
                <li>
                    <strong>Naval Engineering COOP | Aker Arctic | Jan 2016 - April 2016</strong>
                    <dl>Mathematically and programmatically modeling iceberg patterns for commercial ship design</dl>
                    <dl>Research and Development</dl>
                </li>
            </ul>
        </section>
    )
}
