import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import BoardGuardScreen from './components/BoardGuardScreen';
import TransitionScreen from './components/TransitionScreen';
import VelocityScreen from './components/VelocityScreen';
import TeamScreen from './components/TeamScreen';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-void text-text-primary font-body overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/boardguard" element={<BoardGuardScreen />} />
          <Route path="/transition" element={<TransitionScreen />} />
          <Route path="/velocity" element={<VelocityScreen />} />
          <Route path="/team" element={<TeamScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

