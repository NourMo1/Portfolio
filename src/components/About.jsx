import hand from "./../assets/hand-shake.svg";

const About = () => {
  
  const infoItems = [
    { label: "Birth", value: "Alexandria" },
    { label: "Experience", value: "1+ Years" },
    { label: "Date of birth", value: "15 Jan 2003" },
  ];

  return (
    <section className="about py-20">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-20">
        {/* Heading + Intro */}
        <div className="grid grid-cols-12 gap-5 mb-15 md:mb-25">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="px-4 py-2 rounded-lg md:px-6 md:py-3 md:rounded-xl bg-primary w-fit flex justify-center items-center mb-10">
              <img
                src={hand}
                className="text-[#F5F5F5] dark:text-text-primary w-6 me-2"
                alt="Icon"
              />
              <p className="text-[#F5F5F5] font-medium dark:text-text-primary text-xs md:text-sm">
                Hi, I'm Nour Al-din Mohamed
              </p>
            </div>
            <h2 className="text-text-primary text-xl sm:text-2xl md:text-4xl font-bold leading-8 md:leading-12 mt-5">
              Frontend Developer <br /> React and Next Specialist.
            </h2>
          </div>
          <div className="about-content col-span-12 md:col-span-6 lg:col-span-7 md:w-[90%] lg:w-[80%] place-self-end">
            <p className="para text-text-primary text-lg md:text-xl font-bold mb-5">
              Jr frontend developer skilled in HTML, CSS, and JavaScript, eager
              to build responsive and user friendly web applications.
            </p>
            <p className="para text-text-secondary text-sm md:text-lg font-medium mb-5">
              Student at Kafrelsheikh University, Faculty of Engineering,
              Computer Engineering.
            </p>
            <div className="flex justify-between items-center gap-2 flex-wrap">
              {infoItems.map((item, index) => (
                <div key={index}>
                  <span className="block font-medium text-xs md:text-sm text-primary tracking-tighter uppercase mb-2">
                    {item.label}
                  </span>
                  <p className="sm:text-lg md:text-xl text-text-primary font-bold">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 border-2 border-border rounded-xl place-items-center">
          <div className="col-span-12 sm:col-span-4 text-center p-4">
            <div className="p-4">
              <span className="block text-primary text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5">
                1
              </span>
              <p className="text-sm text-text-primary sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase">
                Years of experience
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4 text-center p-4 bg-surface">
            <div className="p-4">
              <span className="block text-primary text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5">
                18
              </span>
              <p className="text-sm text-text-primary sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase">
                Projects completed
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4 text-center p-4">
            <div className="p-4">
              <span className="block text-primary text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5">
                20
              </span>
              <p className="text-sm text-text-primary sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase">
                Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;