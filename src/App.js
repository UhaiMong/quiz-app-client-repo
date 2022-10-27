import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import { routers } from './Routs/Mainrout';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>
        <RouterProvider router={routers} />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
