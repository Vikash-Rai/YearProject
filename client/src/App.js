import './App.css';
import Navbar from './components/headers/Navbar';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/home/Contact';
import About from './components/home/About';
import Blog from './components/home/Blog';
import DocSignup from './components/forms/DocSignup';

function App() {
  return (
<BrowserRouter> 
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/blog" element={<Blog/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/contact" element={<Contact/>}/> 
      <Route path="/docSignup" element={<DocSignup/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
