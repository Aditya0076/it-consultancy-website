const PureContainerIcon = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
      {children}
    </a>
  );
};

export default PureContainerIcon;
