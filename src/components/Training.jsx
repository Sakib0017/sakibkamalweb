const experiences = [
    {
      id: 1,
      name: "Daffodil International University [ 08/01/2016 – 28/12/2019 ]",
      city:
        "Dhaka, Bangladesh",
        field:
        "Computer Science & Engineering",
        grade: "3.25/4.00",
        image: "src/assets/skills-3.png",
    },
    {
      id: 2,
      name: "Khulna Model School & College [ 08/06/2012 – 28/06/2014 ]",
      city:
        "Khulna, Bangladesh",
        field:
        "Science",
        grade: "4.10/5.00",
        image: "src/assets/skills-3.png",
    },
    {
      id: 3,
      name: "St. Josephs High School [ 27/03/2004 – 03/04/2012 ]",
      city:
        "Khulna, Bangladesh",
        field:
        "Science",
        grade: "4.75/5.00",
        image: "src/assets/skills-3.png",
    },
    
  ];

const Traning = () => {

  return (
    <div className="lg:mx-12 mx-4 py-32"  id="training">
      <div className="mb-20">
       
        <h2 className="md:text-5xl text-4xl text-center text-headingcolor  font-bold">Education & Training</h2>
      </div>


      {/* experienceis card */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
        {
            experiences.map( experience => <div key={experience.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                <img src={experience.image} alt="" className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"/>
                <h3 className="text-2xl font-bold mb-4">{experience.name}</h3>
                <p>{experience.city}</p>
                <p>{experience.field}</p>
                <p>{experience.grade}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Traning;
