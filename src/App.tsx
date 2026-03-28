import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';

const OurStory = () => <div className="page-placeholder"><h2>Our Story</h2></div>;
const WaterAttributes = () => <div className="page-placeholder"><h2>Water Attributes</h2></div>;
const Sustainability = () => <div className="page-placeholder"><h2>Sustainability</h2></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="water-attributes" element={<WaterAttributes />} />
          <Route path="sustainability" element={<Sustainability />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
