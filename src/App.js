import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalHeader } from "./components/GlobalHeader/GlobalHeader.js";
import { GlobalFooter } from "./components/GlobalFooter/GlobalFooter.js";
import ListBirdsPage from "./pages/ListBirds/ListBirds.jsx";
import RegisterBirdsPage from "./pages/RegisterBirds/RegisterBirds.jsx";
import UpdateBirdsPage from "./pages/UpdateBirds/UpdateBirds.jsx";

function App() {
  return (
    <Router>
      <GlobalHeader appname="Bird Sightings"/>
      <Routes>
        <Route path="/" element={<Navigate to="/birds" replace />} />
        <Route path="/birds" element={<ListBirdsPage />} />
        <Route path="/add-bird/:type" element={<RegisterBirdsPage/>} />
        <Route path="/update-bird/:birdId" element={<UpdateBirdsPage/>} />
        <Route path="*" element={<Navigate to="/birds" replace />} />
      </Routes>
      <GlobalFooter/>
    </Router>
  );
}

export default App;
