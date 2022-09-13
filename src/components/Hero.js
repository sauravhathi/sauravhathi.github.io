const Hero = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-around mt-24 mb-52">
        <div className="text-center md:text-left md:ml-3 md:mr-3 whitespace-pre-line">
          <h1 className="font-semibold text-red-500 text-6xl sm:text-7xl md:text-5xl">
            <span className="text-blue-500">About</span>{" "}
            <span className="text-gray-600">Me</span>
          </h1>
          <p className="pt-2 pb-2 text-cyan-900 font-semibold">
            I'm Saurav Hathi, a Software developer from India. I'm a self-taught
<br></br>
            web developer and I love to learn new things. I'm currently pursuing
<br></br>
            my B.Tech in Computer Science and Engineering from LPU Punjab.
          </p>
          <button className="bg-gray-600 hover:bg-gray-500 text-white mt-10 font-bold py-3 px-10 rounded">
            <a href="#how" className="tracking-wider text-2xl">
              Let's go
            </a>
          </button>
        </div>
        {/* img none */}
        <div className="hidden md:block">
          <img
            src={require("../assests/hero.jpg")}
            alt="Hero"
            className="object-cover object-center w-[400px] rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
