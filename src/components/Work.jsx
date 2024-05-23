const experiences = [
    {
      id: 1,
      name: "Klover Cloud [ 31/12/2021 – 01/04/2022 ]",
      city:
        "Dhaka, Bangladesh",
      position: "Software Developer",
        image: "src/assets/skills-2.png",
    },
    {
      id: 2,
      name: "Automation Research Center [ 01/06/2022 – 30/06/2023 ]",
      city:
        "Dhaka, Bangladesh",
        position: "Software Developer",
        image: "src/assets/skills-2.png",
    },
    {
      id: 3,
      name: "Popular Diagnostic Centre Ltd. Dhanmondi [ 01/08/2023 – Current ]",
      city:
        "Dhaka, Bangladesh",
        position: "IT Officer",
        image: "src/assets/skills-2.png",
    },
    
  ];

const Work = () => {

  return (
    <div className="lg:mx-12 mx-4 py-32"  id="experience">
      <div className="mb-20">
       
        <h2 className="md:text-5xl text-4xl text-center text-headingcolor  font-bold">JOB EXPERIENCE</h2>
      </div>


      {/* experienceis card */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
        {
            experiences.map( experience => <div key={experience.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                <img src={experience.image} alt="" className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"/>
                <h3 className="text-2xl font-bold mb-4">{experience.name}</h3>
                <p>{experience.city}</p>
                <p>{experience.position}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Work;
