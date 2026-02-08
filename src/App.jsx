import { Routes, Route, Navigate } from 'react-router-dom';
import GeneratorPage from './pages/GeneratorPage.jsx';
import ValentinePage from './pages/ValentinePage.jsx';
import AcceptedPage from './pages/AcceptedPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GeneratorPage />} />
      <Route path="/valentine" element={<ValentinePage />} />
      <Route path="/accepted" element={<AcceptedPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
