

import Navbar from "./Navbar";
const About = () => {

  return (
    <>
    <Navbar/>
    <div className='max-w-7xl bg-[#33ddff]/20 rounded m-5 shadow-2xl p-10 mx-auto mt-20'>
    <div className="px-4  sm:px-0">
      <h3 className="text-base font-semibold text-[32px] leading-7 text-center text-gray-900">About Me</h3>
      
    </div>
    <div className="grid md:grid-cols-2">
        <div className="col-span-1">
    <div className="mt-6 ">
      
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Md. Sakib Kamal</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Mobile</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">01921777053</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">sakibkamal0017@gmail.com</dd>
        </div>
     
      </div>
      </div>
      <div className="col-span-1">
    <div className="mt-6 ">
     
       
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Role</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Mern Stack Developer</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Permanent Address</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">50, East Circular Road, South Tootpara, Khulna.</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Present Address</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Kazipara Bus Stand, Mirpur 10, Dhaka.</dd>
        </div>
       
      </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default About;
