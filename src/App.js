import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Error from './components/Error';
import Eventpage from './components/Eventpage';
import Coordinates from './components/Coordinates';
import Coreteam from './components/Coreteam';

import Timeline from './components/Timeline';
import About from './components/About';
// import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import { Element } from 'react-scroll'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>

            <Navbar />
            <Routes>
            <Route path="/" element={<>
            <Element name='home'>
                <Home/>
            </Element>
            <Element name='events'>
                <Events />
            </Element>
            <Element name="timeline">
                <Timeline />
            </Element>
            <Coreteam/>
            <Element name="about">
                <About />
            </Element>
            <Coordinates/>
            <Element name='contact'>
              <Contact />
            </Element>
            </>
        } />
        
       
                <Route path="/eventpage/:id" element={<Eventpage/>}/>
                <Route path="events" element={<Events/>}/>
                <Route path="*" element={<Error/>}/>

            </Routes>
        </Router>
        </div>
    );
}

export default App;
