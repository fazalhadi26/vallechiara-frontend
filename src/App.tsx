import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import OurStory from './pages/OurStory/OurStory';
import InsideTheSource from './pages/InsideTheSource/InsideTheSource';
import WCT from './pages/WCT/WCT';
import Support from './pages/Support/Support';
import Subscribe from './pages/Subscribe/Subscribe';
import Login from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="inside-the-source" element={<InsideTheSource />} />
          <Route path="wct" element={<WCT />} />
          <Route path="support" element={<Support />} />
          <Route path="subscribe" element={<Subscribe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
