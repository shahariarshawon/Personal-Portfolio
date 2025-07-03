import React, { useState } from 'react';
import { ChevronsRight } from 'lucide-react';
import profileImage from "../../assets/project-photos/cropper.jpg";

function Index() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 py-10 px-4 transition-all duration-500">
      
      {/* Profile Card */}
      <div className={`w-full max-w-[400px] relative h-[450px] group overflow-hidden border-2 border-black bg-white rounded-md text-white shadow-lg transition-all duration-1000 ${showDetails ? 'md:translate-x-[-50px]' : ''}`}>
        <div className="w-full h-full">
          <img
            src={profileImage}
            alt="Al Shahariar Arafat Shawon"
            className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
          />
        </div>

        {/* Hover Overlay */}
        <article className="p-8 w-full h-full absolute top-0 left-0 z-10 flex flex-col justify-end rounded-md bg-[#C0C9EE] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
            <h1 className="md:text-2xl font-semibold text-black">Who I Am</h1>
            <p className="sm:text-base text-sm text-black">
              I'm a passionate Full Stack Developer dedicated to building modern, scalable, and user-friendly web applications that solve real-world problems.
            </p>
            <button
              className="p-2 bg-black flex items-center gap-1 rounded-md text-white hover:bg-gray-800 transition"
              onClick={() => setShowDetails(true)}
            >
              Learn More <ChevronsRight size={18} />
            </button>
          </div>
        </article>

        {/* Bottom Tag */}
        <article className="p-3 w-full h-[20%] absolute bottom-0 flex flex-col justify-end bg-gradient-to-t from-[#C0C9EE] text-black rounded-b-md transition-all duration-300 group-hover:opacity-0 group-hover:-bottom-4">
          <h1 className="md:text-2xl font-semibold">Al Shahariar Arafat Shawon</h1>
          <p className="sm:text-base text-sm">Full Stack Developer</p>
        </article>
      </div>

      {/* Learn More Panel */}
      {showDetails && (
        <div className="w-full max-w-[420px] bg-white border rounded-xl shadow-xl p-6 flex flex-col justify-between text-black transition-all duration-1000 animate-slideIn">
          <div>
  <h2 className="text-2xl md:text-3xl font-bold mb-2">👋 Hello, I’m Al Shahariar Arafat Shawon</h2>
  <p className="text-lg font-medium mb-4">
    A passionate <span className="text-violet-600 font-semibold">Full Stack Developer</span> with <span className="text-green-600 font-semibold">2+ years</span> of experience crafting digital solutions.
  </p>
  <p className="mb-2">
    I build scalable apps, responsive UIs, and solve real-world problems using modern technologies.
  </p>
  <p className="mb-2">
    I'm currently pursuing a Bachelor's degree in Computer Science and Engineering at <span className="font-semibold text-violet-600">IUBAT</span>.
  </p>
  <p className="mb-2">
    Always learning, improving, and collaborating on exciting projects worldwide.
  </p>
  <p className="mb-4">
    Let's work together and build something awesome.
  </p>
</div>


          <button
            onClick={() => setShowDetails(false)}
            className="mt-6 self-start px-4 py-2 border rounded-md text-sm hover:bg-black hover:text-white transition"
          >
            ← Go Back
          </button>
        </div>
      )}
    </section>
  );
}

export default Index;
