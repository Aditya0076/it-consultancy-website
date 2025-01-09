const ContainerIcon = ({ viewBox, text, children, link }) => {
  return (
    <a
      href={link}
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox={viewBox}>
        {children}
      </svg>
      <span className="sr-only">{text}</span>
    </a>
  );
};

export default ContainerIcon;
