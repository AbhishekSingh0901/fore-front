import React from "react";

function About() {
  return <div className=" min-h-screen">
    <span className="text-3xl text-red-800 underline flex justify-center m-5">About Us</span>
      <div className="text-black">
        At Forefront Industrial Solutions LLP, we deliver inventive and contemporary solutions that ensure safe, efficient, and expertly executed Engineering, Procurement, and Construction (EPC) projects.
  
        During the pre-construction stage, we believe in meticulous planning and startergizing; always striving to strike a balance between innovation and practicality. With constant advancement in technology, we as an organisation make an effort to instill creativity in our construction solutions. 
        Furthermore, our approach is always supported with extensive cost-analysis, risk management, and mitigation to ensure our solutions are not only efficient but also reliable in the long run. 
        
        Execution is key to the success of any project, and we at Forefront are proud of say that execution is our strong suit. Our expertise stems from a deep understanding of each project, it’s unique requirements, limitations, budgets local and global restraints. With each project, we encourage our team to channel their creativity and provide timely, cost-effective, and world-class services. 
        
        By prioritising safety, quality, and reliability, Forefront defines success as synonymous with valued and satisfied clients. 
        
        We ensure that our employees as well as our supply chain partners have the right skills, certifications, and training to provide the highest quality and best outcomes in every project. Our biggest selling point is our investment in our employees and workers, we believe that a continuously evolving team is better equipped to face challenges, manage crisis’, and bring fresh and unique perspectives to each project.
      </div>

      <div className="text-black flex flex-col sm:flex-row justify-center items-center gap-5 p-5 w-full">
        <div className="border-2 border-red-900 px-6 py-4 text-center rounded-lg shadow-md flex-1">
            <span className="text-lg text-white bg-red-600">Planning & startergizing 📐</span>
            <p>Balancing creativity with practicality through meticulous planning.</p>
        </div>
        <div className="border-2 border-red-900 px-6 py-4 text-center rounded-lg shadow-md flex-1">
           <span className="text-lg">Team growth 👷‍♂️</span>
           <p>Skilled teams for fresh perspectives and crisis management.</p>
        </div>
        <div className="border-2 border-red-900 px-6 py-4 text-center rounded-lg shadow-md flex-1">
           <span className="text-lg">Execution 🚀</span>
           <p>Cost-effective, efficient, and reliable project delivery.</p>
        </div>
      </div>


    </div>;
}

export default About;
