import React from "react";
import doctor from "../assets/images/medical-doctor.webp";

const About = () => {
  return (
    <div
      id="about"
      className="parallax min-h-screen md:h-screen lg:min-h-screen
    flex justify-center items-center mt-0"
    >
      <div
        className="flex flex-col my-auto mx-auto 
      tracking-wider"
      >
      


        <h2 className=" text-[#f1683a] text-2xl lg:text-5xl md:text:3xl font-bold text-center mt-10 md:mt-2 mb-4 text-shadow p-[5%]">
          ABOUT
        </h2>
        <div className="flex flex-col sm:flex-row md:flex-row justify-between mt-5 mb-10 md:gap-16">
        <div className="md:w-2/4">
            <img
              src={doctor}
              alt="medical doctor"
              className="object-cover rounded-xl mx-auto shadow-2xl"
              height={400}
              width={400}
            />
          </div>
          <div className="text-white md:w-2/4 my-auto mx-1">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl md:text-3xl lg:4xl font-bold my-3">
                Dr Code: A Doctor and a Web Developer
              </h3>
              <p className="text-md md:text-md lg:text-xl font-bold">
                In the intersection of Technology and healthcare, there exist a
                unique breed bridging the gap between Medicine and technology. I
                am a qualified physician and a skilled web developer. I have a
                passion to write web code and create innovative digital web
                solutions. I am a graduate of Delta State University,
                Abraka.(MBBS degree). I am a self thought web developer skilled
                in developing MERN and PERN stack web app.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
