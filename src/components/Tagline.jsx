const Tagline = ({ className, children }) => {
  return (
    <div className={`tagline items-center ${className || ""} font-kumar`}>
      <div className="mx-3 whitespace-nowrap absolute -top-2 h1 text-n-1/15">{children}</div>
    </div>
  );
};

export default Tagline;
