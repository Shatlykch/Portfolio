
import NavBar from './components/NavBar/NavBar.js'
import Home from './components/Home/Home.js';
import About from './components/About/About.js'
import './index.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer.js';


function App () {

  return (


    <main>

      <NavBar />
      <Footer />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>

    </main>


  );

}

export default App;
