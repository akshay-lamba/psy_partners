import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SuiteScreen from './components/SuiteScreen';
import TeamScreen from './components/TeamScreen';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-void text-text-primary font-body overflow-x-hidden">
        <Routes>
          <Route path="/" element={<SuiteScreen />} />
          <Route path="/team" element={<TeamScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

