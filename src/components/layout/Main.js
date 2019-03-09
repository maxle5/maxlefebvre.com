import React, { Component } from 'react'

import Home from '../sections/Home';
import About from '../sections/About';
import Work from '../sections/Work';

export class Main extends Component {
    render() {
        return (
            <main>
                <Home />
                <About />
                <Work />
            </main>
        )
    }
}

export default Main;
