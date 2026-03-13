import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ProtectedRoute from './components/ProtectedRoute';

import LandingPage from './pages/LandingPage';
import RequestPage from './pages/RequestPage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminRequests from './pages/admin/AdminRequests';
import AdminRequestDetail from './pages/admin/AdminRequestDetail';
import { RoadBorders } from './components/RoadBorders';

function BodyClassSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    const isAdmin = pathname.startsWith('/admin');
    if (isAdmin) document.body.classList.add('admin-page');
    else document.body.classList.remove('admin-page');
    return () => document.body.classList.remove('admin-page');
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <BodyClassSync />
        <RoadBorders />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/requests"
            element={
              <ProtectedRoute>
                <AdminRequests />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/requests/:id"
            element={
              <ProtectedRoute>
                <AdminRequestDetail />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
