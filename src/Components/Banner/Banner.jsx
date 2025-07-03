import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="mt-32 text-center space-y-6">
      <h2 className="text-6xl md:text-8xl font-extrabold text-primary">
        Al Shahariar Arafat Shawon
      </h2>
      <div className="bg-linear-to-r/oklab from-indigo-500 to-teal-400 px-6 py-3 inline-block rounded-lg text-white text-lg md:text-2xl font-semibold">
        <Typewriter
          words={[
            "Full Stack Developer",
            "Frontend Engineer",
            "PHP Developer",
            "UI/UX Designer",
          ]}
          loop={0} // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mt-4">
        Passionate about building intuitive and scalable web applications. I
        blend creativity with technical expertise to deliver robust solutions
        that make a lasting impact.
      </p>
    </div>
  );
};

export default Banner;
