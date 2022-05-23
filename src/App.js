import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import { useEffect, useState } from 'react';

function App() {
  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div className="App">
      { width>=1024 && height>600 ?
      <Dashboard/>:
      <div>Please view it in desktop screen</div>}
    </div>
  );
}

export default App;
