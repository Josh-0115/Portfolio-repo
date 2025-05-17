# Portfolio Website (React + ⚡Vite)

A modern, responsive portfolio website built with Vite, React, and Tailwind CSS, showcasing my skills, projects, and contact information. The site features a downloadable CV (Basic_Resume.docx.pdf), EmailJS-powered contact forms, and is deployed on GitHub Pages at https://your-username.github.io/your-portfolio.

Table of Contents
```
Features
Technologies
Project Structure
Setup
Deployment
Usage
Troubleshooting
Contributing
License
```
# Features
```
Responsive Design: Adapts to mobile, tablet, and desktop screens using Tailwind CSS.
Downloadable CV: Download Basic_Resume.docx.pdf via a button in Home.jsx.
Single-Page Application (SPA): Smooth navigation with GitHub Pages routing support via 404.html.
Custom Styling: Tailwind CSS with primary (#0EA5E9) and secondary (#64748B) colors.
Static Assets: Images (hero.jpg, profile.jpg) and CV in public/.
Deployment: Hosted on GitHub Pages for free, accessible at `https://your-username.github.io/your-portfolio`.
```
# Technologies
```
Vite 5.x: Fast build tool for modern web projects.
React 18.x: Component-based UI library.
Tailwind CSS 3.x: Utility-first CSS framework.
EmailJS: Serverless email service for form submissions.
GitHub Pages: Free static site hosting.
Node.js 18.x+: Runtime for development and build.
npm 8.x+: Package manager.
```
# Project Structure
```your-portfolio/
├── public/
│   ├── assets/
│   │   ├── Basic_Resume.docx.pdf  # CV file for download
│   │   ├── images/
│   │   │   ├── hero.jpg
│   │   │   ├── profile.jpg
│   │   │   ├── screenshot.png  # README screenshot
├── src/
│   ├── components/
│   │   ├── Home.jsx           # Home section with CV download
│   │   ├── HireModal.jsx      # Hire Me form modal
│   │   ├── Contact.jsx        # Contact form section
│   ├── assets/                # Source images (processed by Vite)
│   ├── index.css              # Tailwind CSS imports
│   ├── main.jsx               # React entry point
├── .gitignore                 # Ignores node_modules, dist/, .env
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
├── README.md                  # This file
```
# Setup
Follow these steps to set up the project locally.
Prerequisites
```
Node.js (18.x or higher) and npm (8.x or higher).
Git installed.
A GitHub account for deployment.
EmailJS account for form functionality (optional for local testing).
```
Installation

1. Clone the Repository:
```
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```
Replace `your-username` and `your-portfolio` with your GitHub username and repository name.

2. Install Dependencies:
```npm install```


3. Add CV File:

Place Basic_Resume.docx.pdf in public/assets/:mkdir -p public/assets
```cp /path/to/your/Basic_Resume.docx.pdf public/assets/Basic_Resume.docx.pdf```
Replace ```/path/to/your/``` with the file’s location (e.g., ```/Users/your-username/Downloads/``` on Mac).


Verify:
```
ls public/assets/
# Should show: Basic_Resume.docx.pdf
```



4. Run Locally:
```npm run dev```
Open ```http://localhost:5173``` to view the site.
Test CV download, forms, and styling.



# Deployment
Deploy the portfolio to GitHub Pages for free hosting.
Prerequisites

A GitHub repository (public or private).
gh-pages package installed:
```npm install --save-dev gh-pages```



Steps

1. Configure package.json:

Ensure homepage and scripts:
```
{
  "homepage": "https://your-username.github.io/your-portfolio",
  "scripts": {
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Replace your-username and your-portfolio.


2. Configure Vite:

Update ```vite.config.js```:
```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/your-portfolio/' // Match repository name
});
```



3. Handle SPA Routing:

After building, copy index.html to 404.html:
```
npm run build
cp dist/index.html dist/404.html
git add dist/404.html
git commit -m "Add 404.html for SPA routing"
```



4. Deploy:

Push code to GitHub:
```
git add .
git commit -m "Prepare for deployment"
git push origin main
```

Deploy to ```gh-pages``` branch:
```npm run deploy```




5. Enable GitHub Pages:

Go to ```https://github.com/your-username/your-portfolio```.
Navigate to Settings > Pages.
Set:
Source: Deploy from a branch.
Branch: ```gh-pages```, ```/ (root)```.


Save and wait 1–5 minutes.
Access at ```https://your-username.github.io/your-portfolio```.


6. Test Deployment:

Verify:
CV download ```(/your-portfolio/assets/Basic_Resume.docx.pdf)```.
Form submissions (check email inbox).
Styling and responsive layouts.


Use DevTools (F12) to check for errors.



# Usage

View Portfolio: Open ```https://your-username.github.io/your-portfolio```.
Download CV: Click "Download CV" in the Home section to get ```John_Anderson_CV.pdf```.
Update Content:
Edit ```Home.jsx```, ```HireModal.jsx```, ```Contact.jsx``` for new content.
Update ```public/assets/Basic_Resume.docx.pdf``` for a new CV.
Redeploy:
```
git add .
git commit -m "Update content"
npm run deploy
```




# Troubleshooting
CV Download Fails

Cause: Missing Basic_Resume.docx.pdf or incorrect href.
Fix:
Verify ```public/assets/Basic_Resume.docx.pdf```:
```
ls public/assets/
```


Check ```Home.jsx```:
```href="https://your-username.github.io/your-portfolio/assets/Basic_Resume.docx.pdf"```


Rebuild and redeploy:
```
npm run build
npm run deploy
```

Check ```gh-pages``` branch for ```assets/Basic_Resume.docx.pdf```.



# Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a branch:
```
git checkout -b feature/your-feature
```


4. Commit changes:
```
git commit -m "Add your feature"
```


6. Push:
```
git push origin feature/your-feature
```


8. Open a pull request.

# License
### 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

**Author:** Sunny Josh 
**GitHub:** [your-github-username](https://github.com/your-github-username)  
**Live Site:** [https://your-username.github.io/your-portfolio](https://your-username.github.io/your-portfolio)  
**Last Updated:** May 17, 2025
