import { Card } from "flowbite-react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useState } from "react";

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
  {
    title: "Menebak Kata",
    description: "Game manebak kata",
    image: "../../assets/resourceImage/MenebakKata.png",
    link: "https://word-guess-react.vercel.app",
  },
  {
    title: "Catatan",
    description: "Website catatan",
    image: "../../assets/resourceImage/catatan.png",
    link: "https://personal-notes-react-theta.vercel.app",
  },
];

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < Math.ceil(projects.length / itemsPerPage) - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="py-10 relative max-md:top-32 md:top-50 top-36">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Portofolio Kami
        </h1>
        <section className="flex justify-center gap-6 items-center">
          {projects.length > 6 && (
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`text-9xl ${
                currentPage === 0 ? "text-gray-500" : "text-white"
              } transition-all`}>
              <IoChevronBack />
            </button>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Card
                key={index}
                className="max-w-lg mx-auto transition-transform transform hover:scale-105 shadow-lg rounded-lg bg-white dark:bg-gray-800"
                imgAlt={project.title}
                imgSrc={project.image}>
                <div className="p-6">
                  <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-base">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-cyan-700 px-5 py-3 text-center text-lg font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    Lihat Proyek
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {projects.length > 6 && (
            <button
              onClick={nextPage}
              disabled={
                currentPage >= Math.ceil(projects.length / itemsPerPage) - 1
              }
              className={`text-9xl ${
                currentPage >= Math.ceil(projects.length / itemsPerPage) - 1
                  ? "text-gray-500"
                  : "text-white"
              } transition-all`}>
              <IoChevronForward />
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
