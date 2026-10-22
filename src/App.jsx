import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './components/PublicLayout';
import AdminLayout from './admin/AdminLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import PortfolioStory from './pages/PortfolioStory';
import Films from './pages/Films';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Weddings from './pages/Weddings';
import Journal from './pages/Journal';

// Admin Pages
import Dashboard from './admin/Dashboard';
import MediaManager from './admin/MediaManager';

import { InquiryProvider } from './context/InquiryContext';
import InquiryModal from './components/InquiryModal';

function App() {
  return (
    <InquiryProvider>
      <Router>
        <Routes>
          {/* Public Routes with Navigation and Footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioStory />} />
            <Route path="/films" element={<Films />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Admin Routes with Sidebar */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            {/* We can add other admin routes here later */}
            <Route path="inquiries" element={<Dashboard />} />
            <Route path="bookings" element={<Dashboard />} />
            <Route path="media" element={<MediaManager />} />
          </Route>
        </Routes>
      </Router>
      <InquiryModal />
    </InquiryProvider>
  );
}

export default App;
