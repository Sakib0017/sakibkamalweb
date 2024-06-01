
import Navbar from "./Navbar";
const skills = [
    {
      id: 1,
      name: "Frontend",
      description:
        "I'm really good at Web Design by using HTML, CSS, Tailwind CSS, Javascript, React js",
        image: "/src/assets/skills-4.png",
    },
    {
      id: 2,
      name: "Backend",
      description:
        "I've used Node js, Express js & PHP in different different project ",
        image: "/src/assets/skills-4.png",
    },
    {
      id: 3,
      name: "Databases",
      description:
        "I'm really good at mysql, mariadb & mongodb",
        image: "/src/assets/skills-4.png",
    },
    
  ];

const Skills = () => {

  return (
    <>
    <Navbar/>
    <div className="lg:mx-12 mx-4 py-32" id="skills">
      <div className="mb-20">
        
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold text-center">My Expertize</h2>
      </div>


      {/* skillis card */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
        {
            skills.map( skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                <img src={skill.image} alt="" className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"/>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <p>{skill.description}</p>
            </div>)
        }
      </div>
    </div>
    </>
  );
};

export default Skills;
