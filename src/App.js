import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Houses from './pages/Houses/Houses';
import HouseDetail from './pages/Houses/HouseDetail';
import Characters from './pages/Characters/Characters';
import CharacterDetail from './pages/Characters/CharacterDetail';
import Chronology from './pages/Chronology/Chronology';


function App() {
  
  
  return (

       <BrowserRouter>
       

               <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Houses" element={<Houses />} />
          <Route path="/Houses/:id" element={<HouseDetail />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/Characters/:id" element={<CharacterDetail />} />
          <Route path="/Chronology" element={<Chronology />} />
        </Routes>

        
        
      </BrowserRouter>
  );
}

export default App;
