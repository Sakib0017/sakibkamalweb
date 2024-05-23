const experiences = [
    {
      id: 1,
      name: "Bangali",
      description:
        "LISTENING C2 READING C2 WRITING C2 SPOKEN PRODUCTION C2 SPOKEN INTERACTION C2",
        
    },
    {
      id: 2,
      name: "English",
      description:
      "LISTENING B2 READING B2 WRITING B2 SPOKEN PRODUCTION B2 SPOKEN INTERACTION B2",
       
    },
    
    
  ];

const Languages = () => {

  return (
    <div className="lg:mx-12 mx-4 py-32"  id="languages">
      <div className="mb-20">
       
        <h2 className="md:text-5xl text-4xl text-center text-headingcolor  font-bold">Languages</h2>
      </div>


      {/* experienceis card */}
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
        {
            experiences.map( experience => <div key={experience.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                
                <h3 className="text-2xl font-bold mb-4">{experience.name}</h3>
                <p>{experience.description}</p> <br></br>
                <p>Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1 and C2: Proficient user</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Languages;
