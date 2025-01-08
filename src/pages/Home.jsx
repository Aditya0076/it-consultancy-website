import HeroSection from "../components/HeroSection";

const Home = ({ isDarkMode }) => {
  return (
    <div>
      <HeroSection isDarkMode={isDarkMode} />
      {/* Komponen lain */}
    </div>
  );
};

export default Home;
