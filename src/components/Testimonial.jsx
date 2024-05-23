const experiences = [
  {
    id: 1,
    name: "Klover Cloud",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "src/assets/skills-2.png",
  },
  {
    id: 2,
    name: "Branding & Logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "src/assets/skills-2.png",
  },
  {
    id: 3,
    name: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "src/assets/skills-2.png",
  },
  
];

const Testimonial = () => {

return (
  <div className="lg:mx-12 mx-4 py-32" id="testimonials">
    <div className="mb-20">
     
      <h2 className="md:text-5xl text-4xl text-center text-headingcolor  font-bold">Testimonals</h2>
    </div>


    {/* experienceis card */}
    <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
      {
          experiences.map( experience => <div key={experience.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
              <img src={experience.image} alt="" className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"/>
              <h3 className="text-2xl font-bold mb-4">{experience.name}</h3>
              <p>{experience.description}</p>
          </div>)
      }
    </div>
  </div>
);
};

export default Testimonial;
