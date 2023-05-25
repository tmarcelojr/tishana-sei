// imports
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// pages
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import AuthPage from './pages/AuthPage/AuthPage';
// components
import NavBar from './components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null); // set up our state
  return (
    <main className="App">
      { user ? 
      <>
      <NavBar />
      <Routes>
        <Route path="orders" element={<OrderHistoryPage />} />
        <Route path="orders/new" element={<NewOrderPage />} />
      </Routes>
      </>
      :
      <AuthPage />
    }
    </main>
  );
}

export default App;
