import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Submit } from './pages/Submit';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Hackathons } from './pages/Hackathons';
import { Archive } from './pages/Archive';
import { EasterEggModal } from './components/EasterEggModal';
import Konami from 'konami-code-js';

function App() {
  const [showEgg, setShowEgg] = useState(false);

  useEffect(() => {
    new Konami(() => {
      setShowEgg(true);
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>

        {showEgg && <EasterEggModal onClose={() => setShowEgg(false)} />}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              borderRadius: '12px',
              padding: '16px',
              fontSize: '14px',
              fontWeight: '500'
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
