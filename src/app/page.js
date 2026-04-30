"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Connect Lenis to GSAP
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    // 3. Animations
    const sections = gsap.utils.toArray('.anim-section');
    sections.forEach(sec => {
      gsap.fromTo(sec,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Tech item stagger
    gsap.fromTo('.tech-item',
      { opacity: 0, scale: 0.5, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: '.tech-grid',
          start: 'top 85%',
        }
      }
    );

    // Skill pill stagger
    gsap.fromTo('.skill-pill',
      { opacity: 0, x: -30, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.05,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.skills-modern-grid',
          start: 'top 85%',
        }
      }
    );

    // Timeline item stagger
    gsap.fromTo('.horizontal-timeline-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.horizontal-timeline-container',
          start: 'top 85%',
        }
      }
    );

    // Draw the timeline line
    gsap.fromTo('.horizontal-line',
      { width: 0 },
      {
        width: '100%',
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: '.horizontal-timeline-container',
          start: 'top 85%',
        }
      }
    );

    // Project cards individual directional animations
    const projectTrigger = {
      trigger: '.projects-grid',
      start: 'top 85%'
    };

    gsap.fromTo('.project-card-0', 
      { opacity: 0, x: -150 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", scrollTrigger: projectTrigger }
    );

    gsap.fromTo('.project-card-1', 
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: projectTrigger }
    );

    gsap.fromTo('.project-card-2', 
      { opacity: 0, x: 150 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", scrollTrigger: projectTrigger }
    );

    // Contact Section Parallax & Stagger
    gsap.fromTo('.contact-info-side',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.contact-split-section', start: 'top 80%' } }
    );
    
    gsap.fromTo('.contact-form-side',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.contact-split-section', start: 'top 80%' } }
    );

    gsap.fromTo('.contact-pill-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "back.out(1.5)", scrollTrigger: { trigger: '.contact-info-side', start: 'top 75%' } }
    );

    gsap.fromTo('.form-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "back.out(1.5)", scrollTrigger: { trigger: '.contact-form-side', start: 'top 75%' } }
    );

    gsap.fromTo('.footer-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: '.portfolio-footer', start: 'top 95%' } }
    );

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <nav className="navbar anim-section">
        <div className="logo">Eti<span>.</span></div>
        <div className="nav-email">helloeti7@gmail.com</div>
        <button className="menu-btn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <main className="hero anim-section">
        {/* Left Side */}
        <div className="hero-left">
          <h1 className="greeting-text">
            Hi,<br />
            I&apos;m <span className="name">Farjana Eti</span>
          </h1>
          <h2 className="role-text">Full Stack Developer</h2>

          <button className="hire-btn">
            Hire Me
            <div className="icon-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg className="social-icon" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="social-icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <div className="dribbble-link"></div>
          </div>
        </div>

        {/* Center Image */}
        <div className="hero-center">
          <div className="hero-image-wrapper">
            <img src="https://i.ibb.co.com/My1fkbKc/1c4ae935-9372-4f08-a03a-13fef9ff6e22.jpg" alt="Farjana Eti" className="hero-image" />
            <div className="hero-image-overlay"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-right">
          <div className="decorations">
            <div className="ring"></div>
            <div className="ring-small"></div>
            <div className="dot-cyan"></div>
          </div>

          <div className="expert-badge">Expert on</div>
          <h3 className="right-title">
            Full Stack Development<br />
            API & Database Systems<br />
            Frontend & Backend Integration
          </h3>
          <p className="right-desc">
            Hey! Are you looking for a developer to build your product and grow your business? let&apos;s shake hands with me and create something amazing together..
          </p>
          <a href="#" className="download-cv">
            Download CV
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V16M12 16L8 12M12 16L16 12M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a href="#" className="chat-btn">
            Let&apos;s Chat
            <div className="chat-icon-container">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM8 14H6V12H8V14ZM12 14H10V12H12V14ZM16 14H14V12H16V14Z" />
              </svg>
              <div className="chat-dot"></div>
            </div>
          </a>
        </div>
      </main>

      <section className="about-section anim-section" id="about">
        <div className="about-image">
          <img src="https://i.ibb.co.com/bjZcvfkY/550ce0be-a8a6-4191-a85e-8725a9838c81.jpg" alt="Farjana Eti" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About <span>Me</span></h2>
          <div className="about-role">Full Stack Developer</div>
          <p className="about-desc">
            I am a passionate developer with a strong focus on building scalable web applications. My expertise spans across frontend and backend technologies, allowing me to craft seamless user experiences integrated with robust database systems. I enjoy solving complex problems and transforming ideas into interactive realities.
          </p>
          <button className="resume-btn">Download Resume</button>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="dashboard-section anim-section" id="technologies">
        <div className="section-header">
          <h2 className="section-title">Technologies</h2>
          <p className="section-subtitle">My Tech Stack</p>
        </div>
        <div className="tech-grid">
          {[
            { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
            { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
            { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
            { name: "Prisma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true },
            { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
          ].map((tech) => (
            <div key={tech.name} className="tech-item">
              <div className="tech-icon-wrapper">
                <img src={tech.src} alt={tech.name} className={`tech-icon ${tech.invert ? 'filter-invert' : ''}`} />
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Skills Section */}
      <section className="dashboard-section anim-section" id="skills">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">My Technical Level</p>
        </div>
        <div className="skills-modern-grid">
          {[
            { name: "HTML5", level: "Expert" },
            { name: "Next.JS", level: "Intermediate" },
            { name: "TypeScript", level: "Expert" },
            { name: "Tailwind CSS", level: "Intermediate" },
            { name: "JavaScript", level: "Expert" },
            { name: "React.JS", level: "Expert" },
            { name: "Node.JS", level: "Expert" },
            { name: "SQL", level: "Intermediate" },
            { name: "Express.JS", level: "Expert" },
            { name: "Docker", level: "Beginner" },
            { name: "MongoDB", level: "Expert" },
          ].map((skill, idx) => (
            <div key={idx} className="skill-pill">
              <div className="skill-pill-content">
                <span className="skill-item-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Qualification / Education Section */}
      <section className="dashboard-section anim-section" id="education">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My Academic Journey</p>
        </div>
        <div className="horizontal-timeline-container">
          <div className="horizontal-line"></div>
          <div className="timeline-items-wrapper">
            {[
              { year: "2020 - present", title: "BSc in CSE", inst: "Institute of science and technology" },
              { year: "2017 - 2019", title: "Higher Secondary Certificate", inst: "Agrani School and College" }
            ].map((item, idx) => (
              <div key={idx} className="horizontal-timeline-item">
                <div className="horizontal-timeline-dot"></div>
                <div className="horizontal-timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-inst">{item.inst}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="dashboard-section anim-section" id="projects">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">My Recent Work</p>
        </div>
        <div className="projects-grid">
          {[
            { id: "e-commerce", title: "E-Commerce Platform", img: "https://picsum.photos/seed/ecommerce/600/400", desc: "A full-scale e-commerce platform with secure payment integrations." },
            { id: "task-manager", title: "Task Management Dashboard", img: "https://picsum.photos/seed/task/600/400", desc: "Intuitive kanban-style project management tool with real-time updates." },
            { id: "portfolio-gen", title: "AI Portfolio Generator", img: "https://picsum.photos/seed/ai/600/400", desc: "SaaS application that generates standalone portfolios using OpenAI." }
          ].map((project, idx) => (
             <div key={project.id} className={`project-card project-card-${idx}`}>
               <div className="project-img-wrapper">
                 <img src={project.img} alt={project.title} className="project-img" />
               </div>
               <div className="project-info">
                 <h3 className="project-title">{project.title}</h3>
                 <p className="project-card-desc">{project.desc}</p>
                 <a href={`/projects/${project.id}`} className="view-details-btn">View Details</a>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* Contact Section Revamped */}
      <section className="contact-split-section anim-section" id="contact">
        <div className="contact-split-container">
          {/* Left Side: Info */}
          <div className="contact-info-side">
            <h2 className="split-title">Let's build something <span>incredible</span></h2>
            <p className="split-desc">I'm currently available for freelance work and full-time opportunities. Drop a message or reach out on any platform.</p>
            
            <div className="contact-links-stack">
              <a href="mailto:helloeti7@gmail.com" className="contact-pill contact-pill-anim">
                <div className="pill-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span>helloeti7@gmail.com</span>
              </a>
              <a href="tel:+8801234567890" className="contact-pill contact-pill-anim">
                <div className="pill-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span>+880 1234-567890</span>
              </a>
              <a href="https://wa.me/8801234567890" target="_blank" rel="noreferrer" className="contact-pill contact-pill-anim">
                <div className="pill-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <span>WhatsApp</span>
              </a>
              <a href="https://linkedin.com/in/farjana-eti" target="_blank" rel="noreferrer" className="contact-pill contact-pill-anim">
                <div className="pill-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-side">
            <form className="message-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group form-anim">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group form-anim">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group form-anim">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="submit-message-btn form-anim">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="portfolio-footer anim-section">
        <div className="footer-content">
          <div className="footer-logo">Eti<span>.</span></div>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Farjana Eti. All rights reserved.</p>
          <div className="footer-links">
             <a href="#about">About</a>
             <a href="#projects">Projects</a>
             <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
