const TeamMember = ({ name, role, image }) => (
  <section className="bg-lightCustomGradient dark:bg-darkCustomGradient shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl w-[250px] px-4 py-6">
    <img
      src={image}
      alt={`${name} - Gambar tidak ditemukan`}
      className="w-24 h-24 object-cover object-top mb-4 mx-auto rounded-full"
    />
    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
      <a
        href="team-details.html"
        className="hover:text-cyan-600 transition-colors duration-200">
        {name}
      </a>
    </h4>
    <span className="text-gray-600 dark:text-gray-300 text-sm">{role}</span>
    {/* <div className="p-2">
      <ul className="social flex justify-center space-x-4">
        <li className="facebook">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <i className="fab fa-facebook-f">Twittwer</i>
          </a>
        </li>
        <li className="twitter">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
            <i className="fab fa-twitter">facebook</i>
          </a>
        </li>
      </ul>
    </div> */}
  </section>
);

const AboutUs = () => {
  const developers = [
    {
      name: "Moh Solehuddin",
      role: "Frontend Developer",
      image: "/assets/img/developers/MohSolehuddin_frontend.jpeg",
    },
    {
      name: "Aditya Bayu Prabowo",
      role: "Backend Developer",
      image:
        "/assets/img/developers/Aditya Bayu Prabowo_Back End Developer.png",
    },
    // {
    //   name: "Zainu Firdaus",
    //   role: "Frontend Developer",
    //   image:
    //     "/assets/img/developers/Aditya Bayu Prabowo_Back End Developer.png",
    // },
    // {
    //   name: "Ikbal",
    //   role: "Backend Developer",
    //   image:
    //     "/assets/img/developers/Aditya Bayu Prabowo_Back End Developer.png",
    // },
    // {
    //   name: "Mirza",
    //   role: "Backend Developer",
    //   image:
    //     "/assets/img/developers/Aditya Bayu Prabowo_Back End Developer.png",
    // },
  ];
  return (
    <div className="py-12 font-sans relative max-md:top-32 md:top-50 top-36 min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 p-4">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Meningkatkan Bisnis Anda
          </h2>
          <h3 className="text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-5">
            Solusi Web & Mobile
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-justify">
            Dengan pengalaman bertahun-tahun dalam pengembangan web dan mobile,
            kami berkomitmen untuk menghadirkan solusi yang dirancang khusus
            sesuai dengan tujuan dan industri bisnis Anda. Apakah Anda seorang
            pemula yang sedang merintis atau perusahaan besar yang sudah mapan,
            kami siap membantu Anda meningkatkan kehadiran digital dan
            memperkuat keterlibatan pengguna dengan teknologi terkini dan
            inovatif.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-justify">
            Kami percaya bahwa setiap bisnis memiliki potensi untuk berkembang
            pesat di ranah digital. Dengan layanan kami, Anda dapat mencapai
            pertumbuhan yang signifikan dan merasakan dampak positif dari
            strategi digital yang efektif. Jangan lewatkan kesempatan untuk
            menjadi pemimpin di industri Anda dengan memanfaatkan solusi
            teknologi yang kami tawarkan.
          </p>
          <div className="text-justify mb-10">
            <h4 className="text-6xl font-bold text-cyan-600">95%</h4>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Pertumbuhan Digital yang Dicapai
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 p-4">
          <img
            src="/assets/img/illustration/21.png"
            alt="Ilustrasi"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Start Team Area */}
      <div className="team-style-one-area p-12 md:p-16 lg:p-24">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="title text-4xl font-bold text-gray-900 dark:text-white">
              Anggota Tim Ahli
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {developers.map((developer, index) => (
              <TeamMember
                key={index}
                name={developer.name}
                role={developer.role}
                image={developer.image}
              />
            ))}
          </div>
        </div>
      </div>
      {/* End Team Area */}
    </div>
  );
};

export default AboutUs;
