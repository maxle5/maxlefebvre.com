import React, { Component } from 'react'

import Home from '../sections/Home';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';

export class Main extends Component {
    render() {
        return (
            <main>
                <Home />
                <About />
                <Experience />
                <Projects />
            </main>
        )
    }
}

export default Main;
