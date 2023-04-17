import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Women from './components/Women';
import Mens from './components/Mens';
import Childern from './components/Childern';
import Addbag from './components/Addbag';
import Recipt from './components/Recipt';
import Confirm from './components/Confirm';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    
      <Navbar/>
     
      <Routes>
        <Route exact path="/" element={<><Slider/><Body/></>}/>
        <Route exact path="/men" element={<Mens/>}/>
        <Route exact path="/women" element={<Women/>}/>
        <Route exact path="/childern" element={<Childern/>}/>
        <Route exact path="/addbag" element={<Addbag/>}/>
        <Route exact path="/recipt" element={<Recipt/>}/>
        <Route exact path="/confirm" element={<Confirm/>}/>





      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
