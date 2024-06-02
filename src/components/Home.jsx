import banner from "../assets/Sakib.jpg";
import React from "react";

const Home = () => {
  return (
    <div className=" bg-[#33ddff]/20 shadow " id="home">
      <div className="lg:px-12 px-4 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
      <div className="">

      <div className="relative">
                    
                    <img src={banner} alt="" className="ms-auto relative border-[30px] border-primary/70 animate-pulse border-blur rounded-full  h-[400px] w-[400px]" />
                    
                    
                </div>
         
        </div>
       
        <div className="w-full mt-5">
          <p className="text-xl text-headingcolor  font-semibold mb-5">Hey, I am Md. Sakib Kamal</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            I'm <span className="text-primary">A Full Stack</span> Web Developer
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
            BSc. in <span className="text-[32px] font-bold text-blue-900/90 animate-pulse "><a href="#">"Computer Science & Engineering"</a></span> From <span className="text-[32px] font-bold text-green-900/90 animate-pulse "><a href="#">"Daffodil International University"</a></span>
          </p>
         
        </div>
       
        
      </div>
    </div>
  );
};

export default Home;
