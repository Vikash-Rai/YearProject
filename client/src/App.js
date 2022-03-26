import './App.css';
import Navbar from './components/headers/Navbar';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/home/Contact';
import About from './components/home/About';
import Blog from './components/home/Blog';
import DocSignup from './components/signuplogin/DocSignup';
import DocLogin from './components/signuplogin/DocLogin';
import PatientLogin from './components/signuplogin/PatientLogin';
import DocOtp from './components/signuplogin/DocOtp';
import PatOtp from './components/signuplogin/PatOtp';
import DocRegister from './components/forms/DocRegister';
import DocLists from './components/doctors/DocLists';
import DocDetail from './components/doctors/DocDetail';
import PatSignup from './components/signuplogin/PatSignup';


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
      <Route path="/patientLogin" element={<PatientLogin/>}/>
      <Route path="/docOtp" element={<DocOtp/>}/>
      <Route path="/patOtp" element={<PatOtp/>}/> 
      <Route path="/docRegister" element={<DocRegister/>}/> 
      <Route path="/docLists" element={<DocLists/>}/> 
      <Route path="/docDetail/:id" element={<DocDetail/>} /> 
      <Route path="/patSignup" element={<PatSignup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
