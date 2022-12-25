import './App.css';
import Main from './Components/Main.js';
import About from './Components/About.js';
import Skills from './Components/Skills.js';
import Projects from './Components/Projects.js';
import Blogs from './Components/Blogs.js';
import Contact from './Components/Contact.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Icons from "react-icons/fa";
import * as Iconsai from "react-icons/ai";
import * as Iconsmd from "react-icons/md";
import data from './Components/UiData.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main Icons={Icons} Iconsmd = {Iconsmd} />}>
          <Route index element={<About Icons={Icons} Iconsai = {Iconsai} />} />
          <Route path="/skills" element={<Skills data={data} />} />
          <Route path="/projects" element={<Projects Icons={Icons} data={data} />}>
            <Route path="/projects/:category" element={<Projects />} />
          </Route>
          <Route path="/blogs" element={<Blogs data={data} />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
