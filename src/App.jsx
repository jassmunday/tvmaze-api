import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shows from './components/Shows.jsx';
import Summary from './components/Summary.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route   path="/" element={<Shows/>}/>
          <Route  path="/details/:id" element={<Summary/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
