import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainThemeLoading from './components/Loading/main-theme-loding/MainThemeLoading';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton';

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
const BlogDetails = lazy(() => import('./pages/BlogDetails/BlogDetails'));
const TermsConditions = lazy(() => import('./pages/TermsConditions/TermsConditions'));
const VCaps = lazy(() => import('./pages/VCaps/VCaps'));

// Dashboard lazy loading
const UserDashboardLayout = lazy(() => import('./user-profile-dashboard/UserDashboardLayout'));
const UserProfile = lazy(() => import('./user-profile-dashboard/Profile/Profile'));
const UserBooking = lazy(() => import('./user-profile-dashboard/Booking/Booking'));
const UserSubscription = lazy(() => import('./user-profile-dashboard/Subscription/Subscription'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
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
            <Route path="blog/:slug" element={<BlogDetails />} />
            <Route path="terms" element={<TermsConditions />} />
            <Route path="v-caps" element={<VCaps />} />
            
            {/* Dashboard Routes under /account */}
            <Route path="account" element={<UserDashboardLayout />}>
              <Route index element={<UserProfile />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="booking" element={<UserBooking />} />
              <Route path="my-subscription" element={<UserSubscription />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
