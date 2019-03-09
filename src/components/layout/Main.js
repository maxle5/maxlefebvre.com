import React, { Component } from 'react'

import Home from '../sections/Home';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

export class Main extends Component {
    render() {
        return (
            <main>
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>
        )
    }
}

export default Main;
