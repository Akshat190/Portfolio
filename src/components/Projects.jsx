const ProjectsSection = () => {
    const projects = [
      {
        imgSrc: './assets/project-1.png',
        title: 'Pet Care',
        description: 'A comprehensive pet care management platform.',
        liveDemoUrl: 'https://petpalacecare.netlify.app/', 
        githubRepoUrl: 'https://github.com/Akshat190/Pet-Care', 
      },
      {
        imgSrc: './assets/project-2.png',
        title: 'Vacation Rental',
        description: 'A user-friendly vacation rental booking system.',
        liveDemoUrl: 'https://voyawander-vacation.netlify.app/',
        githubRepoUrl: 'https://github.com/Akshat190/Vacation-Rental-system',
      },
      {
        imgSrc: './assets/project-3.png',
        title: 'Novel ',
        description: 'A sleek platform for reading and managing novels.',
        liveDemoUrl: 'https://wonted-novel.netlify.app/',
        githubRepoUrl: 'https://github.com/Akshat190/bookish-spork-react',
      },
      {
        imgSrc: './assets/project-4.png',
        title: 'Hotel Booking',
        description: 'An online system for hotel reservations and management.',
        liveDemoUrl: 'https://motelpalace.netlify.app/',
        githubRepoUrl: 'https://github.com/Akshat190/Hotel-Booking',
      },
      {
        imgSrc: './assets/project-5.png',
        title: 'Bookish Novel',
        description: 'An interactive novel reading experience platform.',
        liveDemoUrl: 'https://novelnexus.netlify.app/',
        githubRepoUrl: 'https://github.com/Akshat190/Novel-website',
      },
      {
        imgSrc: './assets/project-6.png',
        title: 'Ecommerce',
        description: 'A responsive ecommerce platform for online shopping.',
        liveDemoUrl: 'https://akshat190.github.io/Ecommerce-website/',
        githubRepoUrl: 'https://github.com/Akshat190/Ecommerce-Website',
      },
    ];
  
    return (
      <section className="projects" id="projects">
        <h2 className="section-title">Recent Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.imgSrc} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="btn-group">
                <button className="btn" onClick={() => window.open(project.liveDemoUrl, '_blank')}>
                  Live Demo
                </button>
                <button className="btn" onClick={() => window.open(project.githubRepoUrl, '_blank')}>
                  Github Repo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;
  