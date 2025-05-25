const Button = ({ className, href, onClick, children, px }) => {
  const classes = `button rounded-xl relative inline-flex items-center justify-center h-11 transition-all ${px || "px-7"} ${
    className || ""
  } border border-n-1/30 bg-none hover:bg-color-1/10
  }`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
