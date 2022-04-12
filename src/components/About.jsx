import React from "react";
import professional from "../assets/skyblue.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-evenly items-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4 h-8">
          <h5 className="w-max m-auto ">Get to know</h5>
          <h1 className="w-max m-auto text-4xl font-bold">About Me</h1>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 justify-center">
          <div className="m-auto  flex justify-center place-content-center">
            <div className="w-5/6 h-5/6 bg-sky-300 flex justify-center place-content-center rounded-3xl">
              <img
                src={professional}
                alt=""
                className="w-[100%] h-[100%] rounded-3xl hover:rotate-6 "
              />
            </div>
          </div>
          <div>
            <p className="text-justify text-2xl w-[90%] m-auto ">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
