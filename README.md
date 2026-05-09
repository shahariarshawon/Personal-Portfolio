# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with React, showcasing skills, projects, and professional journey as a Full Stack Developer.

---

# 📌 Portfolio Preview

* React
* Tailwind CSS

---

# ✨ Features

* 🎨 Modern UI/UX — Clean, professional design with smooth animations
* 📱 Fully Responsive — Optimized for mobile, tablet, and desktop
* ⚡ Fast Performance — Optimized loading and rendering
* 🌗 Dark/Light Mode — Theme switcher support
* 🎭 Framer Motion Animations — Smooth transitions and effects
* 📧 Contact Form — Integrated email functionality
* 🎯 SEO Optimized — Better search engine visibility
* ♿ Accessible — WCAG-compliant design

---

# 🛠️ Tech Stack

## Frontend

* React — UI library
* React Router — Navigation and routing
* Framer Motion — Animation library
* Tailwind CSS — Utility-first CSS framework
* DaisyUI — Tailwind CSS component library

## Additional Libraries

* React Icons — Icon library
* React Simple Typewriter — Typing animation
* React Toastify — Toast notifications
* Lucide React — Modern icon set

---

# 📂 Project Structure

```text
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
```

---

# 🚀 Getting Started

## ✅ Prerequisites

Make sure you have installed:

* Node.js (v16 or higher)
* npm or yarn

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/shahariarshawon/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3. Start Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

### 4. Open Browser

Visit:

```text
http://localhost:5173
```

---

# 🏗️ Build for Production

```bash
npm run build
```

or

```bash
yarn build
```

Optimized production files will be generated inside the `dist` folder.

---

# 👀 Preview Production Build

```bash
npm run preview
```

or

```bash
yarn preview
```

---

# 🎨 Customization

## 🔹 Update Personal Information

### Banner Section

Edit:

```text
src/Components/Banner/Banner.jsx
```

Update:

* Name
* Titles
* Social links
* Profile image URL

---

### About Me Section

Edit:

```text
src/Components/AboutMe/AboutMe.jsx
```

Update:

* Bio
* Description
* Career goals

---

### Projects Section

Modify:

* Project details
* Images
* GitHub links
* Live demo links

---

### Skills Section

Edit:

```text
src/Components/Technologies/Technologies.jsx
```

Update:

* Technologies
* Skill levels
* Years of experience

---

### Education & Experience

Edit respective component files to update:

* Timeline
* Academic details
* Work experience

---

# 🎨 Color Scheme

Default gradient colors:

* Indigo — `from-indigo-500/600`
* Purple — `via-purple-500/600`
* Teal — `to-teal-400/500`

Modify globally inside:

```text
tailwind.config.js
```

---

# 📄 Resume Setup

Replace your resume inside:

```text
public/Resume-of-AL-Shahariar-Arafat-Shawon-MERN-Stack-Developer.pdf
```

Update resume paths in:

```text
src/Components/Banner/Banner.jsx
src/Components/Navbar/Navbar.jsx
```

---

# 📱 Sections Overview

## 1. Landing Page

* Animated typewriter intro
* Direct portfolio entry button

## 2. Home Section

* Professional image
* Floating animation
* Role typewriter effect
* Social media links
* Resume button

## 3. About Me

* Introduction
* Skills summary
* Career aspirations

## 4. Technologies

* Interactive skill cards
* Experience levels
* Technology stack

## 5. Featured Projects

* Project showcase
* GitHub and live links
* Tech stack used

## 6. Experience

* Professional timeline
* Role descriptions

## 7. Education

* Academic timeline
* Degrees and institutions

## 8. Certifications

* Professional certifications
* Course completion showcase

## 9. Contact

* Contact form
* Social links
* Direct communication options

---

# 🎯 Key Features Explained

## 🖱️ Custom Cursor

Desktop-only smooth-following animated cursor.

---

## 🔄 Page Transitions

Smooth animations powered by Framer Motion.

---

## 📱 Responsive Navigation

### Desktop

* Horizontal menu

### Mobile

* Hamburger menu
* Dropdown navigation

---

## ✨ Scroll Animations

Components animate into view using `whileInView` from Framer Motion.

---

## 🌗 Theme Toggle

Switch between dark and light themes using DaisyUI.

---

# 🌐 Deployment

## ▲ Vercel (Recommended)

1. Push code to GitHub
2. Import repository into Vercel
3. Deploy instantly

---

## 🌍 Netlify

### Build Project

```bash
npm run build
```

Upload the `dist` folder manually or connect GitHub for auto deployment.

---

## 🐙 GitHub Pages

### Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Add to `package.json`

```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Deploy

```bash
npm run deploy
```

---

# 📊 Performance

* ⚡ Lighthouse Score: 95+
* 📦 Bundle Size: ~200KB (gzipped)
* 🚀 First Contentful Paint: <1.5s
* ✅ Mobile Friendly
* ✅ SEO Optimized

---

# 🤝 Contributing

Contributions are welcome.

## Contribution Steps

1. Fork the project
2. Create a feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit changes

```bash
git commit -m 'Add some AmazingFeature'
```

4. Push changes

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

---

# 📝 License

This project is licensed under the MIT License.

---

# 📧 Contact

## Al Shahariar Arafat Shawon

* 📧 Email: [shahariarshawon.dev@gmail.com](mailto:shahariarshawon.dev@gmail.com)
* 💼 LinkedIn: shahariar-shawon
* 🐙 GitHub: @shahariarshawon
* 🐦 Twitter: @Shahariarshaw11
* 🌐 Portfolio: Your Live Site URL

---

# 🙏 Acknowledgments

Special thanks to:

* React
* Framer Motion
* Tailwind CSS
* DaisyUI
* React Icons
* Lucide Icons

---

# 📸 Screenshots

## 🖥️ Desktop View

[![image.png](https://i.postimg.cc/qvHgt83R/image.png)](https://postimg.cc/ykn7t3n4)

---

## 📱 Mobile View

[![image.png](https://i.postimg.cc/vBKZG9s2/image.png)](https://postimg.cc/Vrj8RJ5X)

---

## 🌙 Dark Mode

[![image.png](https://i.postimg.cc/ncBBwVK9/image.png)](https://postimg.cc/GH344C5b)

---

<div align="center">
  <p>Made with ❤️ by Al Shahariar Arafat Shawon</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>

---

# 🔄 Version History

## v1.0.0 (Current)

* ✅ Initial release
* ✅ Responsive design
* ✅ Framer Motion animations
* ✅ Dark/Light mode
* ✅ Contact form integration
* ✅ Custom cursor
* ✅ SEO optimization

---

# 🔮 Upcoming Features

* 🔜 Blog section
* 🔜 Testimonials
* 🔜 Analytics integration
* 🔜 Multi-language support
* 🔜 PWA support
