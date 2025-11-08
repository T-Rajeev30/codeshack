const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 relative z-20 pointer-events-none">
      <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white text-center leading-tight mb-6 tracking-tight pointer-events-auto">
        CODESHACK
      </h1>

      <p className="text-white/70 text-base md:text-lg lg:text-xl text-center max-w-2xl px-4 font-light pointer-events-auto">
        Where Code Meets Innovation
      </p>
    </div>
  );
};

export default HeroSection;
