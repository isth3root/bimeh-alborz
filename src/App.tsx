import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserDashboardPage from './pages/UserDashboardPage';
import AdminPage from './pages/AdminPage';
import TrainingPage from './pages/TrainingPage';
import InfoPage from './pages/InfoPage';
import ContactPage from './pages/ContactPage';
import DownloadsPage from './pages/DownloadsPage';
import { InstallmentProvider } from './contexts/InstallmentContext';

const App = () => {
  return (
    <InstallmentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<UserDashboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
        </Routes>
      </Router>
    </InstallmentProvider>
  );
};

export default App;
