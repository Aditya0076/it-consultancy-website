import HeroSection from "../components/HeroSection";

const Home = ({ isDarkMode }) => {
  return (
    <div>
      <HeroSection isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
