import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import Copyright from "./microComponents/icons/copyright/Copyright";
import PureContainerIcon from "./microComponents/icons/PureContainerIcon";

const FooterComponent = () => {
  const followUs = [
    {
      text: "Instagram",
      link: "https://www.instagram.com/syntaxthreads_official",
    },

    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/syntax-threads-697a52345/",
    },
  ];

  const resources = [
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Services",
      link: "/services",
    },
    {
      text: "Portfolio",
      link: "/portfolio",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];

  const legal = [
    {
      text: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      text: "Terms & Conditions",
      link: "/terms-and-conditions",
    },
  ];
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="/assets/superai-image-1735128080093.png"
                className="h-8 mr-3 rounded-full"
                alt="Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Syntax Threads Generation
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {resources.map((item, index) => (
                  <li key={index} className={index === 0 ? "mb-4" : ""}>
                    <a
                      href={item.link}
                      className="hover:underline text-gray-900 dark:text-white">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {followUs.map((item, index) => (
                  <li key={index} className={index === 0 ? "mb-4" : ""}>
                    <a
                      href={item.link}
                      target="_blank"
                      className="hover:underline text-gray-900 dark:text-white">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {legal.map((item, index) => (
                  <li key={index} className={index === 0 ? "mb-4" : ""}>
                    <a
                      href={item.link}
                      className="hover:underline text-gray-900 dark:text-white">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <Copyright />
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <PureContainerIcon
              link={"https://www.linkedin.com/in/syntax-threads-697a52345/"}>
              <FaLinkedin className="text-2xl" />
            </PureContainerIcon>
            <PureContainerIcon
              link={"https://www.instagram.com/syntaxthreads_official/"}>
              <FaSquareInstagram className="text-2xl" />
            </PureContainerIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
