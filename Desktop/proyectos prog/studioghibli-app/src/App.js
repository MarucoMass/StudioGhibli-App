import './App.css';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import ItemDetailContainerMovie from './components/ItemDetailContainerMovie';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:films' element={<Movies />} />
            <Route path='/films/:idFilm' element={<ItemDetailContainerMovie />} />
          </Routes>
      </BrowserRouter>
        {/* <Footer/> */}
    </>
  );
}

export default App;
