import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Pages/Home';
import GrildList from './componets/Pages/GrildList';
import ModalLogin from './componets/Pages/ModalLogin';
import Footer from './componets/Footer';

function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar />
      
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GrildList" element={<GrildList />} />
          <Route path="/ModalLogin" element={<ModalLogin />} />

          <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      <Footer />
     </BrowserRouter>

    </>

  );
}

export default App;
