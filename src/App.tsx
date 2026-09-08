import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import AuthPortal from './pages/AuthPortal';
import AdminLogin from './pages/AdminLogin';
import LandingPage from './pages/LandingPage';
import PassengerPortal from './pages/PassengerPortal';
import OperatorDashboard from './pages/OperatorDashboard';
import ScheduleExplorer from './pages/ScheduleExplorer';
import LegalPage from './pages/LegalPage';
import AboutPage from './pages/AboutPage';
import ConductorDashboard from './pages/ConductorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Import Components
import CookieBanner from './components/CookieBanner';
import ThemeToggle from './components/ThemeToggle';
import AiChatBot from './components/AiChatBot';

export default function App() {
  return (
    <Router>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPortal />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/passenger" element={<PassengerPortal />} />
        <Route path="/operator" element={<OperatorDashboard />} />
        <Route path="/schedules" element={<ScheduleExplorer />} />
        <Route path="/legal/:policy" element={<LegalPage />} />
        
        <Route path="/conductor" element={<ConductorDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <CookieBanner />
      <AiChatBot />
    </Router>
  );
}
