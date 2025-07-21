import React from 'react';

// Add brand-aligned colors manually
const skills = [
  { name: 'Node.js', logo: 'https://icon.icepanel.io/Technology/svg/Node.js.svg', level: 'Expert', exp: '4 years', color: 'green-500' },
  { name: 'Express.js', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/Express.png', level: 'Advanced', exp: '3 years', color: 'gray-700' },
  { name: 'Vercel', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/Vercel.png', level: 'Intermediate', exp: '2 years', color: 'neutral-900' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', level: 'Expert', exp: '4 years', color: 'cyan-400' },
  { name: 'Vite', logo: 'https://vitejs.dev/logo.svg', level: 'Advanced', exp: '2 years', color: 'purple-500' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', level: 'Expert', exp: '5 years', color: 'yellow-400' },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', level: 'Advanced', exp: '3 years', color: 'blue-600' },
  { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', level: 'Advanced', exp: '2 years', color: 'teal-400' },
  { name: 'MongoDB', logo: 'https://icon.icepanel.io/Technology/svg/MongoDB.svg', level: 'Advanced', exp: '3 years', color: 'green-600' },
  { name: 'Firebase', logo: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_96dp.png', level: 'Intermediate', exp: '2 years', color: 'amber-400' },
  { name: 'Git & GitHub', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', level: 'Expert', exp: '5 years', color: 'orange-500' },
  { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg', level: 'Intermediate', exp: '2 years', color: 'indigo-500' },
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', level: 'Intermediate', exp: '2 years', color: 'blue-500' },
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', level: 'Advanced', exp: '3 years', color: 'yellow-300' },
  {
    name:'PHP', logo:'https://i.ibb.co/N2234C7R/new-php-logo.png', level:'Intermediate', exp:'2 years', color: 'teal-400'
  }
];

// Tailwind-compatible color to class map
const colorMap = {
  'green-500': 'hover:border-green-500 hover:ring-green-500 hover:shadow-green-500/40',
  'gray-700': 'hover:border-gray-700 hover:ring-gray-700 hover:shadow-gray-700/40',
  'neutral-900': 'hover:border-neutral-900 hover:ring-neutral-900 hover:shadow-neutral-900/40',
  'cyan-400': 'hover:border-cyan-400 hover:ring-cyan-400 hover:shadow-cyan-400/40',
  'purple-500': 'hover:border-purple-500 hover:ring-purple-500 hover:shadow-purple-500/40',
  'yellow-400': 'hover:border-yellow-400 hover:ring-yellow-400 hover:shadow-yellow-400/40',
  'blue-600': 'hover:border-blue-600 hover:ring-blue-600 hover:shadow-blue-600/40',
  'teal-400': 'hover:border-teal-400 hover:ring-teal-400 hover:shadow-teal-400/40',
  'green-600': 'hover:border-green-600 hover:ring-green-600 hover:shadow-green-600/40',
  'amber-400': 'hover:border-amber-400 hover:ring-amber-400 hover:shadow-amber-400/40',
  'orange-500': 'hover:border-orange-500 hover:ring-orange-500 hover:shadow-orange-500/40',
  'indigo-500': 'hover:border-indigo-500 hover:ring-indigo-500 hover:shadow-indigo-500/40',
  'blue-500': 'hover:border-blue-500 hover:ring-blue-500 hover:shadow-blue-500/40',
  'yellow-300': 'hover:border-yellow-300 hover:ring-yellow-300 hover:shadow-yellow-300/40',
};

const SkillCard = ({ logo, name, level, exp, color }) => {
  const colorClasses = colorMap[color] || '';
  return (
    <div
      className={`w-36 h-40 bg-violet-100  text-gray-900  rounded-xl shadow-md text-center p-3 border-2 border-transparent transition-all duration-300 transform hover:scale-105 ring-0 ${colorClasses}`}
    >
      <img src={logo} alt={name} className="w-10 h-10 mx-auto mb-2" />
      <h3 className="text-sm font-semibold">{name}</h3>
      <span className="inline-block text-green-700 bg-white  text-xs font-medium px-2 py-0.5 rounded-full mt-1">
        ● {level}
      </span>
      <p className="text-xs text-gray-600  font-medium mt-1">{exp} exp</p>
    </div>
  );
};

const SkillsGallery = () => {
  return (
    <div className="mt-10 flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsGallery;
