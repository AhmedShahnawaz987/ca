import React from 'react'
import AboutSection from './aboutsection/AboutSection'
import Duedate from './dueDate/Duedate'
import Header from './Header/Header'
import LUpdates from './latestupdation/latestGrid/LatestUpdates'
// import Services from './services/Services'
import Servicesd from './servicesdemo/Servicesd'


function Home() {
    return (
        <div>
            <Header/>
            <LUpdates />
            <Duedate />
            <Servicesd/>
            <AboutSection />
            
        </div>
    )
}

export default Home
