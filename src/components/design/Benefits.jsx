export const GradientLight = ({ header, hero, modal }) => {
  const renderGradientHeader = () =>
    modal ? (
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full bg-linear-gradient-bottom from-[#fffcf220] to-[#fffcf205]/0 to-70% pointer-events-none" />
    ) : (
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full bg-linear-gradient from-[#fffcf220] to-[#fffcf205]/0 to-70% pointer-events-none" />
    );

  const renderGradient = () =>
    hero ? (
      <div className="absolute  opacity-30 top-0 left-1 w-full h-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-90% pointer-events-none" />
    ) : (
      <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
    );

  return header ? renderGradientHeader() : renderGradient();
};
