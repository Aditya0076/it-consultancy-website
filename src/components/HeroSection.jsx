import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HeroSection = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Topaz Maritime",
      description: "Profil Perusahaan",
      image: "../../assets/resourceImage/1.png",
      link: "https://topazmaritime.co.id/galleries",
    },
    {
      title: "Pinterlab",
      description: "Website Kustom",
      image: "../../assets/resourceImage/2.png",
      link: "https://pintarlabs.web.app/",
    },
    {
      title: "Website Restoran",
      description: "Website Kustom",
      image: "../../assets/resourceImage/3.png",
      link: "https://zainufirdaus.web.app/",
    },
    {
      title: "IAAJ",
      description: "Profil Perusahaan",
      image: "../../assets/resourceImage/4.png",
      link: "https://iaajofficial.com/",
    },
    {
      title: "Sistem Manajemen Konten",
      description: "Website Kustom",
      image: "../../assets/resourceImage/5.png",
      link: "https://mts-pesri-kendari.sch.id/login",
    },
    {
      title: "Rish Archery",
      description: "Profil Perusahaan",
      image: "../../assets/resourceImage/6.png",
      link: "https://risharchery.com/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div
      className={`min-h-screen w-full flex items-center relative text-white`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10">
        <div className="text-center lg:text-left lg:w-1/2">
          <h4 className="text-xl font-semibold">MEMPERDAYAKAN BISNIS ANDA</h4>
          <h2 className="text-6xl font-bold mt-2">
            Solusi Web & Mobile Inovatif
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Ubah ide Anda menjadi solusi digital yang kuat dengan layanan
            pengembangan web dan mobile kami yang canggih. Kami menyediakan
            layanan pembuatan web dan mobile yang sesuai dengan kebutuhan bisnis
            Anda, memastikan keunggulan teknologi dan pengalaman pengguna yang
            luar biasa.
          </p>
          <div className="flex justify-center lg:justify-start mt-6">
            <Link to="/portfolio">
              {" "}
              {/* Link to Portfolio page */}
              <Button
                className={`bg-${isDarkMode ? "dark" : "white"} text-${
                  isDarkMode ? "white" : "blue-500"
                } font-semibold`}>
                Lihat Proyek Kami
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={projects[currentIndex].image}
              alt="Gambar Tidak Ditemukan"
              className="w-full h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 transform hover:scale-105"
            />
            <div className="flex justify-center mt-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full mr-2 cursor-pointer ${
                    index === currentIndex ? "bg-white" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
