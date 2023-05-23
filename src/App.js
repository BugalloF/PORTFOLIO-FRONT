import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Portfolio from './Portfolio.jsx'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Navigate to="/es" />} />
      <Route path='/:lan' exact element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;