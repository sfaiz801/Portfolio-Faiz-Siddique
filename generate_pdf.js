const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/resume.pdf'));

// Colors
const primaryColor = '#0F172A';
const accentColor = '#0284C7';

// Header
doc.fillColor(primaryColor).fontSize(28).text('FAIZ SIDDIQUE', { align: 'center' });
doc.fillColor(accentColor).fontSize(14).text('Full Stack Web Developer', { align: 'center' });
doc.moveDown(0.5);

// Contact Info
doc.fillColor('#334155').fontSize(10);
doc.text('Email: siddiquefaiz521@gmail.com | Phone: +91 9431255424', { align: 'center' });
doc.text('LinkedIn: linkedin.com/in/faiz-siddique-7304ba305 | GitHub: github.com/sfaiz801', { align: 'center' });
doc.moveDown(2);

// Helper for section titles
const addSectionTitle = (title) => {
  doc.fillColor(primaryColor).fontSize(16).text(title, { underline: true });
  doc.moveDown(0.5);
};

// About Me
addSectionTitle('ABOUT ME');
doc.fillColor('#334155').fontSize(11).text(
  'I am a passionate Full Stack Web Developer and BCA Student (Enrolled 2024), specializing in building modern, scalable, and beautifully designed web experiences. I love transforming complex problems into simple, elegant, and intuitive digital solutions.',
  { align: 'justify', lineGap: 4 }
);
doc.moveDown(1.5);

// Experience & Education
addSectionTitle('EDUCATION & EXPERIENCE');
doc.fontSize(12).fillColor(primaryColor).text('Bachelor of Computer Applications (BCA)');
doc.fontSize(10).fillColor('#64748B').text('2024 - Present');
doc.moveDown(0.5);

doc.fontSize(12).fillColor(primaryColor).text('Freelance Web Developer');
doc.fontSize(10).fillColor('#64748B').text('Self-Employed | 2023 - 2024');
doc.fontSize(11).fillColor('#334155').text('Built responsive, modern web applications for various clients. Specialized in MERN stack and Next.js.');
doc.moveDown(0.5);

doc.fontSize(12).fillColor(primaryColor).text('Full Stack Web Development');
doc.fontSize(10).fillColor('#64748B').text('Indixpert Academy | 2023');
doc.moveDown(1.5);

// Skills
addSectionTitle('TECHNICAL SKILLS');
doc.fontSize(11).fillColor('#334155');
doc.text('Frontend: React.js, Next.js, JavaScript, HTML5, CSS3 / SCSS, Bootstrap', { lineGap: 4 });
doc.text('Backend: Node.js, Python', { lineGap: 4 });
doc.text('Design: Figma, Canva', { lineGap: 4 });
doc.text('Tools: Git / GitHub, Jira / Agile', { lineGap: 4 });
doc.moveDown(1.5);

// Projects
addSectionTitle('PROJECTS');
doc.fontSize(12).fillColor(primaryColor).text('Classic Tailor', { continued: true }).fillColor('#64748B').fontSize(10).text(' - E-Commerce Platform');
doc.fontSize(11).fillColor('#334155').text('Tech Stack: Next.js, React, Bootstrap, SCSS', { lineGap: 2 });
doc.text('Live: classic-tailor-s.vercel.app', { link: 'https://classic-tailor-s.vercel.app', underline: true, color: accentColor });
doc.moveDown(0.5);

doc.fontSize(12).fillColor(primaryColor).text('Fanciful Llama', { continued: true }).fillColor('#64748B').fontSize(10).text(' - Interactive Web App');
doc.fontSize(11).fillColor('#334155').text('Tech Stack: React, Framer Motion, CSS', { lineGap: 2 });
doc.text('Live: fanciful-llama-79664a.netlify.app', { link: 'https://fanciful-llama-79664a.netlify.app', underline: true, color: accentColor });
doc.moveDown(0.5);

doc.fontSize(12).fillColor(primaryColor).text('Lezato Restaurant Dashboard', { continued: true }).fillColor('#64748B').fontSize(10).text(' - Admin Panel');
doc.fontSize(11).fillColor('#334155').text('Tech Stack: Next.js, React Bootstrap, Chart.js', { lineGap: 2 });
doc.text('Live: lezato-restaurant.vercel.app/dashboard', { link: 'https://lezato-restaurant.vercel.app/dashboard', underline: true, color: accentColor });

doc.end();
console.log("PDF generated successfully.");
