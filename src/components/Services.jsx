import React from "react";
import { Card } from "flowbite-react";

const services = [
  {
    id: 1,
    title: "Pengembangan Web",
    description: "Pengembangan Frontend & Backend",
    image: "/assets/img/illustration/2.png",
    content: {
      heading: "Manfaat dari Pengembangan Web dan Mobile",
      text: "Buka kemungkinan baru dengan aplikasi web dan mobile kustom yang disesuaikan dengan kebutuhan Anda.",
      list: [
        "Pengembangan web mutakhir dengan kerangka kerja modern.",
        "Desain aplikasi Android yang berfokus pada mobile.",
        "Dukungan waktu nyata melalui email & live chat.",
      ],
    },
  },
  {
    id: 2,
    title: "Pengembangan Mobile",
    description: "Pengembangan Aplikasi Android",
    image: "/assets/img/illustration/10.png",
    content: {
      heading: "Wawasan dari Analisis SEO",
      text: "Dapatkan wawasan berharga untuk meningkatkan visibilitas online Anda.",
      list: [
        "Komunikasi yang luar biasa.",
        "Pengalaman desain yang sedang tren.",
        "Dukungan melalui email & live chat.",
      ],
    },
  },
  {
    id: 3,
    title: "Desain Responsif",
    description: "Desain Web Berbasis Mobile",
    image: "/assets/img/illustration/3.png",
    content: {
      heading: "Wawasan dari Analisis SEO",
      text: "Dapatkan wawasan berharga untuk meningkatkan visibilitas online Anda.",
      list: [
        "Komunikasi yang luar biasa.",
        "Pengalaman desain yang sedang tren.",
        "Dukungan melalui email & live chat.",
      ],
    },
  },
  {
    id: 4,
    title: "Desain UX/UI",
    description: "Desain Antarmuka yang Berpusat pada Pengguna",
    image: "/assets/img/illustration/4.png",
    content: {
      heading: "Wawasan dari Analisis SEO",
      text: "Dapatkan wawasan berharga untuk meningkatkan visibilitas online Anda.",
      list: [
        "Komunikasi yang luar biasa.",
        "Pengalaman desain yang sedang tren.",
        "Dukungan melalui email & live chat.",
      ],
    },
  },
  {
    id: 5,
    title: "Optimisasi Web",
    description: "Optimisasi Kecepatan & Performa",
    image: "/assets/img/illustration/12.png",
    content: {
      heading: "Wawasan dari Analisis SEO",
      text: "Dapatkan wawasan berharga untuk meningkatkan visibilitas online Anda.",
      list: [
        "Komunikasi yang luar biasa.",
        "Pengalaman desain yang sedang tren.",
        "Dukungan melalui email & live chat.",
      ],
    },
  },
];

const Service = () => {
  return (
    <div className="light:bg-gradient-to-r from-green-400 to-blue-500 dark:bg-gray-700 py-10 rounded-md w-full">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Apa yang Kami Lakukan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="max-w-md mx-auto transition-transform transform hover:scale-105 shadow-lg rounded-lg bg-white dark:bg-gray-800"
              imgAlt={service.title}
              imgSrc={service.image}
            >
              <div className="p-6 flex flex-col h-full">
                <a href="#">
                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h5>
                </a>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                  {service.description}
                </p>
                <h6 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">
                  {service.content.heading}
                </h6>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                  {service.content.text}
                </p>
                <ul className="list-none mb-4 flex-grow">
                  {service.content.list.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center mb-2 text-lg text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.629 12.133l-3.5-3.5a1 1 0 00-1.415 1.415l4.5 4.5a1 1 0 001.415 0l10-10a1 1 0 00-1.415-1.415l-9.293 9.293z" />
                      </svg>
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-auto block w-full rounded-lg bg-cyan-700 px-6 py-3 text-center text-lg font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Lihat Detail
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
