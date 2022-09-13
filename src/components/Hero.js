const Hero = () => {

  const Skills = [
    {
      name: 'Java',
    },
    {
      name: 'Node.js',
    },
    {
      name: 'React',
    },
    {
      name: 'MongoDB',
    },
    {
      name: 'SQL',
    },
    {
      name: 'Android',
    },
    {
      name: 'Git',
    },
    ]

  return (
    <>
      <div
        className="flex flex-row items-center justify-around mt-24 mb-52"
        id="About"
      >
        <div
          className="text-center md:text-left md:ml-[5%] md:mr-[5%] whitespace-pre-lin2
          "
        >
          <h1 className="font-semibold text-red-500 text-6xl sm:text-7xl md:text-5xl">
            <span className="text-blue-500">About</span>{" "}
            <span className="text-gray-600">Me</span>
          </h1>
          <p className="pt-2 pb-2 text-cyan-900 font-semibold break-words">
            I'm Saurav Hathi, a Software developer from India. I'm a self-taught
            <br></br>
            web developer and I love to learn new things. I'm currently pursuing
            <br></br>
            my B.Tech in Computer Science and Engineering from LPU Punjab.
          </p>
          <h2 className="text-2xl mt-5 font-semibold text-gray-600 mb-2">
            What Skill I Have
          </h2>
          <ul className="list-disc list-inside flex-wrap">
              {
                  Skills.map((skill) => (
                      <li
                className="inline-flex
                mb-4
            bg-gray-600 px-4 py-2 rounded-full text-white font-semibold text-sm mr-2"
              >
                {skill.name}
              </li>

                  ))
              }
          </ul>
        </div>

        <div
          className="
          
          hidden md:block md:mr-[5%]
        "
        >
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
