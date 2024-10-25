import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Pastikan untuk menginstal framer-motion

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // Untuk mengatur tampilan login

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'imran sayang zaraaa' && password === '250523') {
      setShowLogin(false); // Sembunyikan form login
      setIsUnlocked(true); // Tampilkan gembok hati
      setTimeout(() => {
        onLogin(); // Panggil fungsi untuk login jika kredensial valid
      }, 1500); // Tunggu 1.5 detik sebelum login
    } else {
      setError('Username atau Password salah!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-red-300 to-yellow-200">
      <h1 className="text-5xl font-bold text-white mb-5">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      {showLogin ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
          >
            Login
          </button>
        </form>
      ) : null}

      {/* Animasi Gembok yang Terbuka */}
      {isUnlocked && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-center"
        >
    
          <h2 className="text-2xl mt-2 text-white">Selamat Datang, Cintaku! ❤️</h2>
        </motion.div>
      )}
    </div>
  );
};

export default LoginPage;
