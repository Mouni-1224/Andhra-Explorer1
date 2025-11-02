import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './styles/global.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Districts from './pages/Districts';
import DistrictDetail from './pages/DistrictDetail';
import AttractionDetail from './pages/AttractionDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favorites from './pages/Favorites';
import Visited from './pages/Visited';
import About from './pages/About';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/districts"
              element={
                <ProtectedRoute>
                  <Districts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/districts/:districtId"
              element={
                <ProtectedRoute>
                  <DistrictDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/attractions/:attractionId"
              element={
                <ProtectedRoute>
                  <AttractionDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route
              path="/visited"
              element={
                <ProtectedRoute>
                  <Visited />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
