import React, { useState } from 'react';
import Slider from 'react-slick';

const LovePage = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showModal, setShowModal] = useState(false); // Status modal diatur ke false

  const messages = [
    "Kau adalah sinar yang menerangi hariku. 💖",
    "Setiap detik bersamamu adalah keajaiban yang tak terlupakan. 🌹",
    "Cintaku padamu tumbuh lebih dalam setiap hari. 🌼",
    "Kau adalah alasan di balik senyumku. 💕",
    "Bersama kita menciptakan kenangan yang tak ternilai. 🌟",
    "Cinta kita adalah perjalanan yang ingin aku jelajahi selamanya. 🚀",
    "Kau adalah inspirasi di setiap langkahku. 💫",
    "Di setiap detik bersamamu, aku menemukan kebahagiaan sejati. 🥰",
    "Ketika aku bersamamu, dunia ini terasa sempurna. 🌍",
    "Kau adalah hati yang kuinginkan selamanya. 💖",
  ];

  const handleNextMessage = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage((prev) => prev + 1);
    } else {
      setShowModal(false); // Menutup modal jika pesan sudah habis
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleOpenModal = () => {
    setShowModal(true); // Membuka modal
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gradient-to-br from-pink-400 via-red-300 to-yellow-200">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 drop-shadow-lg text-center">
        Cinta Kita Selamanya!
      </h1>
      <p className="text-lg md:text-xl text-white mb-5 text-center max-w-2xl px-4">
        Di setiap detik bersamamu, aku menemukan kebahagiaan. 
        Semoga cinta kita selalu bersinar dan menghangatkan hati kita. ❤️
      </p>

      {/* Slider Gambar */}
      <Slider {...settings} className="w-full max-w-xl mb-5">
        <div>
          <img 
            src="https://example.com/photo1.jpg" // Ganti dengan URL foto kalian
            alt="Moment 1" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img 
            src="https://example.com/photo2.jpg" // Ganti dengan URL foto kalian
            alt="Moment 2" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img 
            src="https://example.com/photo3.jpg" // Ganti dengan URL foto kalian
            alt="Moment 3" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </Slider>

      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-center">Mari kita rayakan cinta kita! 🎊💖</h2>

      {/* Bagian Musik */}
      <audio controls className="w-full max-w-md mb-5">
        <source src="https://example.com/your-favorite-song.mp3" type="audio/mpeg" />  {/* Ganti dengan link lagu favorit pacarmu */}
        Your browser does not support the audio element.
      </audio>

      {/* Tombol untuk pesan tambahan */}
      <button 
        className="bg-white text-pink-600 font-semibold py-2 px-6 rounded shadow-lg hover:bg-pink-200 transition-colors mb-5"
        onClick={handleOpenModal} // Membuka modal saat tombol diklik
      >
        Pesan Manis Selanjutnya
      </button>

      {/* Modal untuk Pesan Manis */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-pink-600 mb-4">Pesan Cinta 💌</h3>
            <p className="text-lg text-gray-700 mb-4">
              {messages[currentMessage]}
            </p>
            {currentMessage < messages.length - 1 ? (
              <button 
                className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
                onClick={handleNextMessage}
              >
                Pesan Selanjutnya
              </button>
            ) : (
              <button 
                className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
                onClick={() => setShowModal(false)} // Menutup modal
              >
                Tutup
              </button>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center">
        <p className="text-2xl md:text-3xl text-white font-bold mb-2">Hadiah Spesial untukmu! 🎁💝</p>
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <p className="text-center text-lg text-pink-600">Cinta dan kebahagiaan yang tak terbatas! ❤️✨</p>
          <p className="text-center text-lg text-pink-600">Sebuah malam yang romantis menantimu! 🌙🌹</p>
        </div>
      </div>

      <footer className="mt-5 text-white text-center">
        <p>Dengan seluruh cintaku,</p>
        <p><strong>[Imran]</strong></p> {/* Ganti dengan nama kamu */}
      </footer>
    </div>
  );
};

// Export komponen
export default LovePage;
