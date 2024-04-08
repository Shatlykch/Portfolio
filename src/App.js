
import NavBar from './components/NavBar/NavBar.js'
import Home from './components/Home/Home.js';
import About from './components/About/About.js'
import './index.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js'
import { Routes, Route } from "react-router-dom";


function App () {

  return (


    <main>

      <NavBar />

      <Routes>

        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />




      </Routes>

    </main>


  );

}

export default App;
