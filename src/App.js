import './App.css';
import Navbar from './componets/Navbar';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Home from './componets/Pages/Home';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        < Routes>
          <Route path="/" element={<Home />} />
        </ Routes>
    </Router>
    </>

  );
}

export default App;
