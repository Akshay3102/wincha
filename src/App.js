import './App.css';
import Winscreen from './components/Winscreen/Winscreen';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Basket from './components/Basket/Basket';
import FAQ from './components/FAQ/FAQ';
import Notiflication from './components/Notiflication/Notiflication';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Winscreen />} path='/winscreen'></Route>
          <Route element={<Home />} path='/index'></Route>
          <Route element={<Profile />} path='/profile'></Route>
          <Route element={<Basket />} path='/basket'></Route>
          <Route element={<FAQ />} path='/faq'></Route>
          <Route element={<Notiflication />} path='/notiflication'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
