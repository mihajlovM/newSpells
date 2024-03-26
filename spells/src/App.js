import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
 import Header from './components/Header/Header';
 import SpellsContainer from './components/Spells/SpellsConainer';

 import {SpellsDetailsContainer} from './components/SpellsDetails/SpellsDetailsContainer';
function App() {
  return (
    <Router>
      <Header></Header>
       <Routes>
         <Route path="test" element={<NotFound />} />
        <Route path="/spells" element={<SpellsContainer />} />
        <Route path="/spells/:index" element={<SpellsDetailsContainer />} />
       </Routes>
    </Router>
  );
}

export default App;
