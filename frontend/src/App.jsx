import { Navigate, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Homepage';

import Navbar from './components/Navbar.jsx';
import { Toaster } from 'react-hot-toast';
import { useUserStore } from './stores/useUserStore.js';
import { useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner'
import AdminPage from './pages/AdminPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import CartPage from './pages/CartPage.jsx';
import { useCartStore } from './stores/useCartStore.js';

function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();
  const { getCartItems } = useCartStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!user) return;
    getCartItems();
  }, [getCartItems, user])

  if (checkingAuth) return <LoadingSpinner />

  return (
    <div className="min-h-screen bg-gray-100 text-black relative overflow-hidden">
      <div className='relative z-50 pt-20'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/secret-dashboard" element={user?.role === "admin" ? <AdminPage /> : <Navigate to="/login" />} />
          <Route path="/category/:category" element={<CategoryPage/>} />
          <Route path="/cart" element={user ? <CartPage/> : <Navigate to='/login' />} />
        </Routes>
      </div>
       <Toaster />
    </div>
  );
}
export default App;