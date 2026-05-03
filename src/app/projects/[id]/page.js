import Link from 'next/link';

const projectsDatabase = {
  "e-commerce": {
    title: "FoodHub – Smart Food Ordering Platform",
    subtitle: "A role-based full-stack system for customers, providers, and admins to manage the complete food ordering lifecycle",

    image: "https://i.ibb.co.com/1G7xTK5Q/foodhub-mockup.png",

    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication"
    ],

    desc: "FoodHub is a full-stack food ordering platform designed with a multi-role architecture. It enables customers to browse meals, add items to cart, and place orders, while providers manage their own food listings and admins oversee the entire system. The application focuses on clean UI, efficient state handling, and secure authentication to deliver a smooth and scalable user experience.",

    liveLink: "https://assignment4-client-lilac.vercel.app/",
    githubClient: "https://github.com/FarjanaEti/assignment-4-client",

    challenges: "The biggest challenge was designing a clean role-based system where customer, provider, and admin functionalities remain isolated but still interact seamlessly. Managing shared state like cart, orders, and authentication across multiple components without breaking UI consistency required careful structuring. Handling edge cases such as empty categories, invalid actions, and protected routes also added complexity.",

    future: "Future improvements include integrating an online payment gateway (e.g., Stripe or SSLCommerz), implementing real-time order tracking, and enhancing the dashboard with analytics for providers and admins. A recommendation system based on user behavior is also planned to increase engagement and conversions."
  },

  "moviebaz": {
    "title": "MovieBaz – Interactive Movie Discovery Platform",
    "subtitle": "A dynamic movie browsing system enabling users to explore, review, and manage personalized watchlists",

    "image": "https://i.ibb.co.com/your-moviebaz-mockup.png",

    "techStack": [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication"
    ],

    "desc": "MovieBaz is a full-stack movie discovery platform built to enhance how users explore and interact with film content. Users can browse movies, view detailed information, add movies to a personalized watchlist, and leave reviews. The platform emphasizes responsive UI, efficient data fetching, and secure authentication, delivering a smooth and engaging user experience for movie enthusiasts.",

    "liveLink": "https://movie-buzz-e0a92.web.app/",
    "githubClient": "https://github.com/FarjanaEti/assignment-10-client",

    "challenges": "One of the key challenges was handling dynamic data rendering for movie listings and details without compromising performance. Managing user-specific features like watchlists and reviews while maintaining secure authentication required careful backend design. Ensuring smooth navigation between pages and handling edge cases such as missing data, empty states, and unauthorized actions also added complexity.",

    "future": "Future enhancements include integrating a third-party movie API (e.g., TMDB) for real-time data, adding advanced filtering and search capabilities, and implementing a recommendation system based on user preferences. Additional features like ratings analytics, social sharing, and trailer previews will further enrich user engagement."
  },

  "earnify": {
    "title": "Earnify – Micro Task & Earning Management Platform",
    "subtitle": "A role-based system connecting task creators and workers through a structured micro-task economy",

    "image": "https://i.ibb.co.com/your-earnify-mockup.png",

    "techStack": [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication"
    ],

    "desc": "Earnify is a full-stack micro-task management platform designed to simulate a small-scale digital earning ecosystem. Users can act as task creators by posting paid tasks or as workers by completing tasks to earn rewards. The platform includes role-based dashboards, task lifecycle management, and secure authentication, ensuring a structured and scalable workflow for both parties.",

    "liveLink": "https://assignment-12-6a1a7.web.app/",
    "githubClient": "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-FarjanaEti",

    "challenges": "Designing a consistent task lifecycle (create → assign → complete → approve) was a major challenge, especially ensuring data integrity across roles. Handling conditional UI rendering for different user types without duplicating logic required careful component structuring. Managing edge cases such as task rejection, incomplete submissions, and unauthorized actions also added complexity.",

    "future": "Future improvements include integrating a real payment system (e.g., SSLCommerz or Stripe), implementing a wallet and transaction history, and adding a reputation system for workers and task creators. Advanced features like task recommendations, real-time notifications, and fraud detection mechanisms will further strengthen platform reliability and user engagement."
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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </nav>

      <div className="project-detail-header">
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-subtitle" style={{ color: 'var(--accent-color)', fontSize: '18px', fontWeight: '500', marginTop: '10px', maxWidth: '800px' }}>
          {project.subtitle}
        </p>
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
