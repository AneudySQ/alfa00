
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './componets/Pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          
        <Route path="Home" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/" />} />

      </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
