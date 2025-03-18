import { Routes, Route } from 'react-router-dom';
import './App.css';

import Counter from './Pages/Counter';
import Home from './Pages/Home';

import CounterRcoil from './Pages/Counter';


function App() {
  return (
    <>
      <div className="card">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counterRecoil" element={<CounterRcoil/>} />
       
        </Routes>
      </div>
    </>
  );
}

export default App;
