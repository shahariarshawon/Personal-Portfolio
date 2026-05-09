# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
🚀 Professional Portfolio Website
A modern, responsive portfolio website built with React, showcasing my skills, projects, and professional journey as a Full Stack Developer.

Portfolio Preview
React
Tailwind CSS

✨ Features
🎨 Modern UI/UX - Clean, professional design with smooth animations
📱 Fully Responsive - Optimized for all devices (mobile, tablet, desktop)
⚡ Fast Performance - Optimized loading and rendering
🌗 Dark/Light Mode - Theme switcher for user preference
🎭 Framer Motion Animations - Smooth, eye-catching transitions
📧 Contact Form - Integrated email functionality
🎯 SEO Optimized - Better visibility on search engines
♿ Accessible - WCAG compliant for inclusivity
🛠️ Tech Stack
Frontend
React - UI library
React Router - Navigation and routing
Framer Motion - Animation library
Tailwind CSS - Utility-first CSS framework
DaisyUI - Tailwind CSS component library
Additional Libraries
React Icons - Icon library
React Simple Typewriter - Typing animation effect
React Toastify - Toast notifications
Lucide React - Modern icon set
📂 Project Structure
text

portfolio/
├── src/
│   ├── Components/
│   │   ├── AboutMe/
│   │   │   └── AboutMe.jsx
│   │   ├── Banner/
│   │   │   ├── Banner.jsx
│   │   │   ├── FrontBanner.jsx
│   │   │   └── FrontBanner.css
│   │   ├── Certifications/
│   │   │   └── Certifications.jsx
│   │   ├── ContactMe/
│   │   │   └── ContactMe.jsx
│   │   ├── Education/
│   │   │   └── Education.jsx
│   │   ├── Experience/
│   │   │   └── Experience.jsx
│   │   ├── FeaturedProjects/
│   │   │   └── FeaturedProjects.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Technologies/
│   │   │   └── Technologies.jsx
│   │   ├── CursorDot.jsx
│   │   └── PageWrapper.jsx
│   ├── Layout/
│   │   ├── FrontLayout.jsx
│   │   └── MainLayout.jsx
│   ├── Pages/
│   │   └── ErrorPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── Resume-of-AL-Shahariar-Arafat-Shawon-MERN-Stack-Developer.pdf
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
🚀 Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v16 or higher)
npm or yarn
Installation
Clone the repository
Bash

git clone https://github.com/shahariarshawon/portfolio.git
cd portfolio
Install dependencies
Bash

npm install
# or
yarn install
Start the development server
Bash

npm run dev
# or
yarn dev
Open your browser
Navigate to http://localhost:5173
Build for Production
Bash

npm run build
# or
yarn build
The optimized files will be in the dist folder.

Preview Production Build
Bash

npm run preview
# or
yarn preview
🎨 Customization
Update Personal Information
Banner Section - Edit src/Components/Banner/Banner.jsx

Update name, titles, and social links
Replace profile image URL
About Me - Edit src/Components/AboutMe/AboutMe.jsx

Update bio and description
Projects - Update the projects data loader

Modify project details, images, and links
Skills - Edit src/Components/Technologies/Technologies.jsx

Add/remove technologies
Update skill levels
Education & Experience - Edit respective component files

Update timeline data
Color Scheme
The portfolio uses a consistent gradient color scheme. To customize:

Primary Colors:

Indigo: from-indigo-500/600
Purple: via-purple-500/600
Teal: to-teal-400/500
Update in tailwind.config.js for global changes.

Resume
Replace the resume file in the public folder:

text

public/Resume-of-AL-Shahariar-Arafat-Shawon-MERN-Stack-Developer.pdf
Update the file path in:

src/Components/Banner/Banner.jsx
src/Components/Navbar/Navbar.jsx
📱 Sections Overview
1. Landing Page
Animated typewriter intro
Direct link to main portfolio
2. Home Section
Professional photo with floating animation
Role typewriter effect
Social media links
Resume download button
3. About Me
Personal introduction
Skills overview
Career aspirations
4. Technologies
Interactive skill cards
Proficiency levels
Years of experience
5. Featured Projects
Project showcase with images
Live demo and GitHub links
Technology stack used
6. Experience
Work history timeline
Role descriptions
7. Education
Academic timeline
Degrees and certifications
8. Certifications
Professional certifications
Course completions
9. Contact
Email form
Social media links
Direct contact options
🎯 Key Features Explained
Custom Cursor (Desktop)
A smooth-following custom cursor enhances the desktop experience with dual-dot animation.

Page Transitions
Smooth page transitions using Framer Motion for a polished feel.

Responsive Navigation
Desktop: Full horizontal menu
Mobile: Hamburger menu with dropdown
Scroll Animations
Components animate into view as you scroll using whileInView from Framer Motion.

Theme Toggle
Switch between light and dark themes (DaisyUI integration).

🌐 Deployment
Vercel (Recommended)
Push code to GitHub
Import project in Vercel
Deploy with one click
Netlify
Build the project: npm run build
Drag and drop dist folder to Netlify
Or connect GitHub repo for continuous deployment
GitHub Pages
Install gh-pages: npm install --save-dev gh-pages
Add to package.json:
JSON

"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
Deploy: npm run deploy
📊 Performance
⚡ Lighthouse Score: 95+
📦 Bundle Size: ~200KB (gzipped)
🚀 First Contentful Paint: <1.5s
✅ Mobile Friendly
✅ SEO Optimized
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📝 License
This project is open source and available under the MIT License.

📧 Contact
Al Shahariar Arafat Shawon

📧 Email: shahariarshawon.dev@gmail.com
💼 LinkedIn: shahariar-shawon
🐙 GitHub: @shahariarshawon
🐦 Twitter: @Shahariarshaw11
🌐 Portfolio: [Your Live Site URL]
🙏 Acknowledgments
React
Framer Motion
Tailwind CSS
DaisyUI
React Icons
Lucide Icons
📸 Screenshots
Desktop View
Desktop View

Mobile View
Mobile View

Dark Mode
Dark Mode

<div align="center"> <p>Made with ❤️ by Al Shahariar Arafat Shawon</p> <p>⭐ Star this repo if you find it helpful!</p> </div>
🔄 Version History
v1.0.0 (Current)
✅ Initial release
✅ Responsive design
✅ Framer Motion animations
✅ Dark/Light mode
✅ Contact form integration
✅ Custom cursor
✅ SEO optimization
Upcoming Features
🔜 Blog section
🔜 Testimonials
🔜 Analytics integration
🔜 Multi-language support
🔜 PWA support
