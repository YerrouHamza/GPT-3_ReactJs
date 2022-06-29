import React from 'react'

/* Get Style */
import './App.css';

/* Get from Component's */
import { Article, Brand, CTA, Feature, Navbar} from './Components';

/* Get from Container's */
import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './Containers';



const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
