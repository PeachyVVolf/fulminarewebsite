import './App.css';
import Home from './components/Home/Home';
import NavbarElem from './components/layout/Header/NavbarElem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Magazines from './components/Magazines/Magazines';
import Photography from './components/Photography/Photography';
import Websites from './components/Websites/Websites';
import MobileApps from './components/MobileApps/MobileApps';
import Gamedev from './components/GameDev/Gamedev';
import MeshAndAnim from './components/3DMeshAndAnim/3DMeshAndAnim';
import SocialPosts from './components/SocialPosts/SocialPosts';
import ProdPhoto from './components/ProdPhotography/ProdPhoto';
import PhotoManip from './components/PhotoManip/PhotoManip';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarElem />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/magazines" element={<Magazines/>} />
          <Route exact path="/photography" element={<Photography/>} />
          <Route exact path="/websites" element={<Websites/>} />
          <Route exact path="/mobApps" element={<MobileApps/>} />
          <Route exact path="/gameDev" element={<Gamedev/>} />
          <Route exact path="/3DMeshAndAnimation" element={<MeshAndAnim/>} />
          <Route exact path="/socialMediaPosts" element={<SocialPosts/>} />
          <Route exact path="/prodPhotography" element={<ProdPhoto/>} />
          <Route exact path="/photoManipulation" element={<PhotoManip/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
