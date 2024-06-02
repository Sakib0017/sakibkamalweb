import banner from "../assets/Sakib.jpg";
import banner1 from "../assets/html.png";
import banner2 from "../assets/css.png";
import banner3 from "../assets/react.png";
import banner4 from "../assets/tailwindcss.png";
import banner5 from "../assets/node.png";
import banner6 from "../assets/mongodb.png";
import banner7 from "../assets/mariadb.png";
import banner8 from "../assets/mysql.png";
import banner9 from "../assets/php.png";
import React from "react";

const Home = () => {
  return (
    <div className=" bg-primary/10  " id="home">
      <div className="lg:px-12 px-4 max-w-7xl mx-auto flex flex-col md:flex-row-reverse iteme-center justify-between py-24 gap-5">
      <div className="">

      <div className="relative">
                    
                    <img src={banner} alt="" className="me-auto relative border-[30px] border-primary/70  rounded-full  h-[400px] w-[500px]" />
                    
                    
                </div>
         
        </div>
       
        <div className="w-full mt-5">
          <p className="text-xl text-headingcolor  text-[32px] font-semibold mb-5">Hey, I am Md. Sakib Kamal</p>
          <h1 className="md:text-[50px] text-[32px]  font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            I'm A <span className="text-primary">Web Developer</span>
          </h1>
         <div className="flex">
              <img src={banner1} className="me-auto relative     h-[50px] w-[50px]"/>
              <img src={banner2} className="me-auto relative     h-[50px] w-[50px]"/>
              <img src={banner3} className="me-auto relative    h-[50px] w-[50px]"/>
              <img src={banner4} className="me-auto relative     h-[50px] w-[50px]"/>
              <img src={banner5} className="me-auto relative    h-[50px] w-[50px]"/>
              
         </div>
         <div className="flex mt-10">
              
              <img src={banner5} className="me-auto relative    h-[50px] w-[50px]"/>
              <img src={banner6} className="me-auto relative     h-[50px] w-[50px]"/>
              <img src={banner7} className="me-auto relative     h-[50px] w-[50px]"/>
              <img src={banner8} className="me-auto relative     h-[50px] w-[50px]"/>
              <img src={banner9} className="me-auto relative     h-[50px] w-[50px]"/>
         </div>
         <div className="flex mt-10"> <button className="bg-primary p-2 text-white font-bold rounded-lg">Detail Expertize</button></div>
        
        </div>
       
        
      </div>
    </div>
  );
};

export default Home;
