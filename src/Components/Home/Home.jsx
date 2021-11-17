import React from 'react'
import AboutSection from './aboutsection/AboutSection'
import Duedate from './dueDate/Duedate'
import Header from './Header/Header'
import Services from './services/Services'

function Home() {
    return (
        <div>
            <Header/>
            <Services />
            <AboutSection />
            <Duedate />
        </div>
    )
}

export default Home
