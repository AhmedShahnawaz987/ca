import React from 'react'
import AboutSection from './aboutsection/AboutSection'
import Duedate from './dueDate/Duedate'
import Header from './Header/Header'
import LUpdates from './latestupdation/latestGrid/LatestUpdates'
import Services from './services/Services'


function Home() {
    return (
        <div>
            <Header/>
            <LUpdates />
            <Duedate />
            <Services />
            <AboutSection />
            
        </div>
    )
}

export default Home
