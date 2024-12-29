const Button = ({ name, isBeam = false, containerClass, to }) => {
  const handleClick = () => {
    if (to) {
      const element = document.getElementById(to);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className={`btn ${containerClass}`} onClick={handleClick}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
