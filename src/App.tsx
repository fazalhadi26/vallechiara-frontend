import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainThemeLoading from './components/Loading/main-theme-loding/MainThemeLoading';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Lazy loading all pages
const Home = lazy(() => import('./pages/Home/Home'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const OurStory = lazy(() => import('./pages/OurStory/OurStory'));
const InsideTheSource = lazy(() => import('./pages/InsideTheSource/InsideTheSource'));
const WCT = lazy(() => import('./pages/WCT/WCT'));
const Support = lazy(() => import('./pages/Support/Support'));
const Subscribe = lazy(() => import('./pages/Subscribe/Subscribe'));
const Login = lazy(() => import('./pages/Auth/Login/Login'));
const Signup = lazy(() => import('./pages/Auth/Signup/Signup'));
const Cart = lazy(() => import('./pages/Cart/Cart'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<MainThemeLoading />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="cart" element={<Cart />} />
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="inside-the-source" element={<InsideTheSource />} />
            <Route path="wct" element={<WCT />} />
            <Route path="support" element={<Support />} />
            <Route path="subscribe" element={<Subscribe />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
