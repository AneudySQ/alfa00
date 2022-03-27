
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Pages/Home';
import RestaurantList from './componets/Pages/RestaurantList';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RestaurantList" element={<RestaurantList />} />
          <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
