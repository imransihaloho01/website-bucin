import React, { useState } from 'react';
import Slider from 'react-slick';
import music from './musik.mp3'; // Import file musik lokal
import satu from './satu.jpg';   // Gambar pertama
import dua from './dua.jpg';     // Gambar kedua
import tiga from './tiga.jpg';   // Gambar ketiga
import empat from './empat.jpg'; // Gambar keempat
import lima from './lima.jpg';   // Gambar kelima
import enam from './enam.jpg';   // Gambar keenam
import tujuh from './tujuh.jpg';  // Gambar ketujuh
import delapan from './delapan.jpg'; // Gambar kedelapan
import sembilan from './sembilan.jpg'; // Gambar kesembilan
import sepuluh from './sepuluh.jpg'; // Gambar kesepuluh
import sebelas from './sebelas.jpg'; // Gambar kesebelas
import duaBelas from './duabelas.jpg'; // Gambar kedua belas
import tigaBelas from './tigabelas.jpg'; // Gambar ketiga belas
import empatBelas from './empatbelas.jpg'; // Gambar keempat belas
import limaBelas from './limabelas.jpg'; // Gambar kelima belas
import enamBelas from './enambelas.jpg'; // Gambar keenam belas


const LovePage = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showGallery, setShowGallery] = useState(false); // Menampilkan galeri foto
  const [audio] = useState(new Audio(music)); // Buat instance audio
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // Kontrol musik

  const messages = [
    "Kau adalah sinar yang menerangi hariku. 💖",
    "Setiap detik bersamamu adalah keajaiban yang tak terlupakan. 🌹",
    "Cintaku padamu tumbuh lebih dalam setiap hari. 🌼",
    "Bersamamu, setiap hari adalah hari yang spesial. 🌈",
    "Kau adalah alasan senyumku setiap pagi. 😊",
    "Cintamu adalah lagu terindah yang pernah kudengar. 🎶",
    "Dalam pelukanmu, aku menemukan rumah. 🏡",
    "Kau adalah impianku yang menjadi nyata. 🌙",
    "Setiap detik bersamamu adalah harta yang berharga. ⏳",
    "Cintamu adalah bintang yang menerangi malamku. ⭐",
    "Kau adalah kebahagiaan yang tak terduga. 🌺",
    "Hanya dengan melihatmu, hatiku berdetak lebih kencang. 💗",
    "Setiap momen bersamamu adalah anugerah. 🎁",
    "Kau adalah jantungku, dan aku tidak bisa hidup tanpamu. ❤️",
    "Cinta kita adalah perjalanan yang tak akan pernah berakhir. 🚀",
    "Bersama kita adalah tempat terindah di dunia. 🌍",
    // Tambahkan pesan lain sesuai kebutuhan...
  ];

  const handleNextMessage = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage((prev) => prev + 1);
    } else {
      setShowModal(false);
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
    setShowModal(true);
  };

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Menampilkan galeri foto
  const handleOpenGallery = () => {
    setShowGallery(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-5 bg-gradient-to-br from-pink-500 via-purple-400 to-blue-300">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 drop-shadow-lg text-center tracking-wide">
        Cinta Kita Selamanya! ❤️
      </h1>
      <p className="text-lg md:text-xl text-white mb-5 text-center max-w-2xl px-4 font-serif">
        Di setiap detik bersamamu, aku menemukan kebahagiaan. Semoga cinta kita selalu bersinar dan menghangatkan hati kita. 💕
      </p>

      {/* Background animasi hati */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 text-2xl opacity-50 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Video sebagai slider */}
      <div className="mb-5 w-full max-w-xl">
        <video className="w-full h-64 md:h-80 object-cover rounded-lg shadow-xl border-4 border-white" autoPlay loop muted>
        <source src={require('./tujuhbelas.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Tombol untuk kontrol musik */}
      <button
        className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-purple-400 transition-transform transform hover:scale-105 mb-5"
        onClick={toggleMusic}
      >
        {isMusicPlaying ? 'Hentikan Musik' : 'Mainkan Musik'}
      </button>

      {/* Tombol untuk pesan tambahan */}
      <button
        className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-purple-400 transition-transform transform hover:scale-105 mb-5"
        onClick={handleOpenModal}
      >
        sayang klik disini 
      </button>

      {/* Tombol untuk membuka galeri foto */}
      <button
        className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-purple-400 transition-transform transform hover:scale-105 mb-5"
        onClick={handleOpenGallery}
      >
        Kenangan Kita
      </button>

      {/* Modal untuk Pesan Manis */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-md mx-4 animate-scaleIn">
            <h3 className="text-xl font-bold text-pink-600 mb-4">Pesan Cinta 💌</h3>
            <p className="text-lg text-gray-700 mb-4">{messages[currentMessage]}</p>
            {currentMessage < messages.length - 1 ? (
              <button
                className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition-colors"
                onClick={handleNextMessage}
              >
                Pesan Selanjutnya
              </button>
            ) : (
              <button
                className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition-colors"
                onClick={() => setShowModal(false)}
              >
                Tutup
              </button>
            )}
          </div>
        </div>
      )}

      {/* Modal untuk Galeri Foto */}
      {showGallery && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-md mx-4 animate-scaleIn">
            <h3 className="text-xl font-bold text-pink-600 mb-4">Kenangan Kita 📸</h3>
            <Slider {...settings} className="w-full max-w-xl">
              <div>
                <img src={satu} alt="Kenangan 1" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={dua} alt="Kenangan 2" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={tiga} alt="Kenangan 3" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={empat} alt="Kenangan 4" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={lima} alt="Kenangan 5" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={enam} alt="Kenangan 6" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={tujuh} alt="Kenangan 7" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={delapan} alt="Kenangan 8" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={sembilan} alt="Kenangan 9" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={sepuluh} alt="Kenangan 10" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={sebelas} alt="Kenangan 11" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={duaBelas} alt="Kenangan 12" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={tigaBelas} alt="Kenangan 13" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={empatBelas} alt="Kenangan 14" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={limaBelas} alt="Kenangan 15" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
              <div>
                <img src={enamBelas} alt="Kenangan 16" className="w-full h-64 md:h-80 object-cover rounded-lg" />
              </div>
            </Slider>
            <button
              className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition-colors mt-4"
              onClick={() => setShowGallery(false)}
            >
              Tutup Galeri
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LovePage;
