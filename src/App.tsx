import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserDashboardPage from './pages/UserDashboardPage';
import AdminPage from './pages/AdminPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import InfoPage from './pages/InfoPage';
import ContactPage from './pages/ContactPage';
import DownloadsPage from './pages/DownloadsPage';
import { AppProvider } from './contexts/AppProvider';
import Layout from './components/Layout';

const App = () => {
  return (
    <AppProvider>
      <Router basename="/bimeh-alborz">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<UserDashboardPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
