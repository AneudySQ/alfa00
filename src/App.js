
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './componets/Pages/Home';
import RestaurantList from './componets/Pages/RestaurantList';

function App() {
  return (
    <>
    <BrowserRouter>
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
