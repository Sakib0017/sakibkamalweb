import banner from "../assets/Sakib.png";



const Home = () => {
  return (
    <div className="mt-20 bg-bgShade " id="home">
      <div className="lg:px-12 px-4 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
      <div className="md:w-1/2 ">
          <img src={banner} alt="" className="ms-auto border-blur rounded-full h-[350px] w-[350px]" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">Hey, I am Md. Sakib Kamal</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            I Am <span className="text-primary">A Full Stack</span> Web Developer
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
            I'm An Computer Science Engineer From A Reputed University from Bangladesh.
          </p>
         
        </div>
        {/* rigth side */}
        
      </div>
    </div>
  );
};

export default Home;
