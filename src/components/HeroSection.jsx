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
    <>
      <div className={`h-screen w-full flex items-center relative text-white`}>
        <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10 gap-6">
          <div className="text-center lg:text-left lg:w-1/2">
            <h4 className="text-xl max-md:text-base font-semibold">
              MEMPERDAYAKAN BISNIS ANDA
            </h4>
            <h2 className="text-6xl max-md:text-3xl font-bold mt-2">
              Solusi Web & Mobile Inovatif
            </h2>
            <p className="mt-4 text-lg max-md:text-sm leading-relaxed">
              Ubah ide Anda menjadi solusi digital yang kuat dengan layanan
              pengembangan web dan mobile kami yang canggih. Kami menyediakan
              layanan pembuatan web dan mobile yang sesuai dengan kebutuhan
              bisnis Anda, memastikan keunggulan teknologi dan pengalaman
              pengguna yang luar biasa.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link to="/portfolio">
                {" "}
                {/* Link to Portfolio page */}
                <Button
                  className={`bg-${isDarkMode ? "dark" : "white"} text-${
                    isDarkMode ? "white" : "blue-500"
                  } font-semibold max-md:text-base`}>
                  Lihat Proyek Kami
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 max-md:w-3/4">
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
      <div className="absolute bottom-0 z-10 w-screen">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill={isDarkMode ? "#111827" : "#FFFFFF"}
              fill-rule="nonzero">
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill={isDarkMode ? "#111827" : "#FFFFFF"}
              fill-rule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default HeroSection;
