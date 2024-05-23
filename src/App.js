import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hot from './components/Hot/Hot';
import Regular from "./components/Regular/Regular";

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="mem-main">
          <div className="main-rectangle">
            <img alt="Mem" className="main-image" />
            <div className="sub-rectangles">
              <div className="sub-rectangle"></div>
              <div className="sub-rectangle"></div>
            </div>
          </div>
          <Routes>
            <Route path="/hot" element={<Hot />} />
            <Route path="/regular" element={<Regular />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
