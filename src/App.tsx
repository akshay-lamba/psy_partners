import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import BoardGuardScreen from './components/BoardGuardScreen';
import TransitionScreen from './components/TransitionScreen';
import VelocityScreen from './components/VelocityScreen';
import TeamScreen from './components/TeamScreen';
import IntelligenceScreen from './components/IntelligenceScreen';
import SignalDetailScreen from './components/SignalDetailScreen';
import NotFoundScreen from './components/NotFoundScreen';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-void text-text-primary font-body overflow-x-hidden">
        <Routes>
          {/* Main Program & Company Pages */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/boardguard" element={<BoardGuardScreen />} />
          <Route path="/board-guard" element={<Navigate to="/boardguard" replace />} />
          <Route path="/transition" element={<TransitionScreen />} />
          <Route path="/ai-transition" element={<Navigate to="/transition" replace />} />
          <Route path="/velocity" element={<VelocityScreen />} />
          <Route path="/executive-velocity" element={<Navigate to="/velocity" replace />} />
          <Route path="/team" element={<TeamScreen />} />
          <Route path="/leadership" element={<Navigate to="/team" replace />} />
          <Route path="/about" element={<Navigate to="/team" replace />} />

          {/* POV & Transition Signals Direct Deep Links */}
          <Route path="/pov" element={<IntelligenceScreen />} />
          <Route path="/pov/:id" element={<SignalDetailScreen />} />
          <Route path="/pov/signal/:id" element={<SignalDetailScreen />} />
          <Route path="/signals" element={<Navigate to="/pov" replace />} />
          <Route path="/signals/:id" element={<SignalDetailScreen />} />
          <Route path="/transition-signals" element={<Navigate to="/pov" replace />} />
          <Route path="/transition-signals/:id" element={<SignalDetailScreen />} />

          {/* 404 Fallback for Unresolved Routes */}
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
