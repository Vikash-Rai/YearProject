import './App.css';
import Navbar from './components/headers/Navbar';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/home/Contact';
import About from './components/home/About';
import Blog from './components/home/Blog';
import DocSignup from './components/signuplogin/DocSignup';
import DocLogin from './components/signuplogin/DocLogin';
import DocOtp from './components/signuplogin/DocOtp';
import DocRegister from './components/forms/DocRegister';
import DocLists from './components/doctors/DocLists';
import DocDetail from './components/doctors/DocDetail';


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
      <Route path="/docLogin" element={<DocLogin/>}/> 
      <Route path="/docOtp" element={<DocOtp/>}/> 
      <Route path="/docRegister" element={<DocRegister/>}/> 
      <Route path="/docLists" element={<DocLists/>}/> 
      <Route path="/docDetail/:id" element={<DocDetail/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
