import React from 'react';

const skills = [
  { name: 'Node.js', logo: 'https://icon.icepanel.io/Technology/svg/Node.js.svg', level: 'Expert', exp: '4 years' },
  { name: 'Express.js', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/Express.png', level: 'Advanced', exp: '3 years' },
  { name: 'Vercel', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/Vercel.png', level: 'Intermediate', exp: '2 years' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', level: 'Expert', exp: '4 years' },
  { name: 'Vite', logo: 'https://vitejs.dev/logo.svg', level: 'Advanced', exp: '2 years' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', level: 'Expert', exp: '5 years' },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', level: 'Advanced', exp: '3 years' },
  { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', level: 'Advanced', exp: '2 years' },
  { name: 'MongoDB', logo: 'https://icon.icepanel.io/Technology/svg/MongoDB.svg', level: 'Advanced', exp: '3 years' },
  { name: 'Firebase', logo: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_96dp.png', level: 'Intermediate', exp: '2 years' },
  { name: 'Git & GitHub', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', level: 'Expert', exp: '5 years' },
  { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg', level: 'Intermediate', exp: '2 years' },
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', level: 'Intermediate', exp: '2 years' },
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', level: 'Advanced', exp: '3 years' },
];

const SkillCard = ({ logo, name, level, exp }) => (
  <div className="w-36 h-40 bg-white rounded-xl shadow-md text-center p-3 hover:scale-110 transition-transform duration-300">
    <img src={logo} alt={name} className="w-10 h-10 mx-auto mb-2" />
    <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
    <span className="inline-block text-green-700 bg-green-100 text-xs font-medium px-2 py-0.5 rounded-full mt-1">
      ● {level}
    </span>
    <p className="text-xs text-gray-600 font-medium mt-1">{exp} exp</p>
  </div>
);

const SkillsGallery = () => {
  return (
    <div className=" mt-10 flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-6 max-w-6xl animate-spin-slow">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsGallery;
