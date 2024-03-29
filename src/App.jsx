import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Pages/Home';
import GrildList from './componets/Pages/GrildList';
import ModalLogin from './componets/Pages/ModalLogin';
import Footer from './componets/Footer';
import Admin from './componets/Pages/Admin';
import App0 from './componets/Pages/App0';

function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar />
      
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GrildList" element={<GrildList />} />
          <Route path="/ModalLogin" element={<ModalLogin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/App0" element={<App0 />} />

          <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      <Footer />
     </BrowserRouter>

    </>

  );
}

export default App;
