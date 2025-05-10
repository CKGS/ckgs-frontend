import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import pages
import MainLayout from "./pages/Layout";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Activities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import ScrollToTop from "./components/ScrollToTop";
import NotificationBanner from "./components/Notifications/NotificationBanner";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="academics" element={<Academics />} />
          <Route path="activities" element={<Activities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
