import './App.css';
import Main from './Components/Main.js';
import About from './Components/About.js';
import Skills from './Components/Skills.js';
import Projects from './Components/Projects.js';
import Blogs from './Components/Blogs.js';
import Contact from './Components/Contact.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* <div className="App">
        </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
