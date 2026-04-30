import Link from 'next/link';

const projectsDatabase = {
  "e-commerce": {
    title: "E-Commerce Platform",
    image: "https://picsum.photos/seed/ecommerce/1200/600",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Stripe API"],
    desc: "A fully functional e-commerce ecosystem designed to provide a seamless buying experience. Features include user authentication, an optimized shopping cart, full checkout workflow via Stripe, and an intuitive product catalog.",
    liveLink: "https://example.com/live",
    githubClient: "https://github.com/example/ecommerce-client",
    challenges: "The most significant challenge was handling complex state synchronization across the shopping cart in real-time without introducing heavy latency. Integrating Stripe Webhooks synchronously with order processing in MongoDB also presented a steep learning curve.",
    future: "Potential future plans include constructing an AI-driven product recommendation engine on the homepage via Python and adding multi-currency functionality to support international buyers."
  },
  "task-manager": {
    title: "Task Management Dashboard",
    image: "https://picsum.photos/seed/task/1200/600",
    techStack: ["React.js", "Node.js", "PostgreSQL", "Prisma"],
    desc: "An intuitive kanban-style project management tool aimed at boosting team productivity. It offers real-time updates via WebSockets, customizable team boards, and role-based access control.",
    liveLink: "https://example.com/live",
    githubClient: "https://github.com/example/task-client",
    challenges: "Building a fluid drag-and-drop experience while maintaining backend consistency required very strict optimistic UI updates and highly optimized database queries.",
    future: "I plan to integrate automated Slack notifications when tasks are moved, as well as a predictive burndown chart generator."
  },
  "portfolio-gen": {
    title: "AI Portfolio Generator",
    image: "https://picsum.photos/seed/ai/1200/600",
    techStack: ["Next.js", "OpenAI API", "AWS S3", "Express"],
    desc: "A powerful SaaS application that intakes user data such as resumes and preferences and automatically generates beautifully styled standalone portfolio websites deploying them seamlessly.",
    liveLink: "https://example.com/live",
    githubClient: "https://github.com/example/ai-portfolio-client",
    challenges: "Ensuring the AI consistently generated reliable, syntactically correct HTML/CSS layouts that wouldn't easily break on mobile screens was hard. Prompt engineering and constraint mapping took up 60% of the development time.",
    future: "Looking forward, I intend to allow users to export the generated code directly as a bundled React repository."
  }
};

export default async function ProjectDetailsPage({ params }) {
  // Await params to handle both Next 14 and Next 15+ seamlessly
  const resolvedParams = await params;
  const project = projectsDatabase[resolvedParams.id];

  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', marginBottom: '20px' }}>Project Not Found</h1>
        <Link href="/" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>← Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="container project-details-page">
      <nav className="project-nav">
        <Link href="/" className="back-btn">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
           </svg>
           Back to Home
        </Link>
      </nav>

      <div className="project-detail-header">
        <h1 className="project-detail-title">{project.title}</h1>
      </div>
      
      <div className="project-detail-image-wrapper">
         <img src={project.image} alt={project.title} className="project-detail-image" />
      </div>

      <div className="project-detail-grid">
        <div className="project-main-content">
          <section className="detail-section">
             <h2>Overview</h2>
             <p>{project.desc}</p>
          </section>
          
          <section className="detail-section">
             <h2>Challenges Faced</h2>
             <p>{project.challenges}</p>
          </section>

          <section className="detail-section">
             <h2>Future Plans</h2>
             <p>{project.future}</p>
          </section>
        </div>
        
        <div className="project-sidebar">
          <div className="sidebar-box">
             <h3>Tech Stack</h3>
             <div className="tech-tags">
               {project.techStack.map(t => <span key={t} className="tech-tag">{t}</span>)}
             </div>
          </div>
          
          <div className="sidebar-box links-box">
             <h3>Links</h3>
             <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-link-btn live">
               View Live Demo
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
             </a>
             <a href={project.githubClient} target="_blank" rel="noreferrer" className="project-link-btn github">
               Client GitHub
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
