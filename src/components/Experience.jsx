

const ExperienceSection = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Skills</h2>
      <div className="experience-info">
        <div className="grid">
          <div className="grid-card">
          <i className="fa-solid fa-wand-magic-sparkles"/>
            <span>Frontend Development</span>
            <h3>HTML5,CSS,Bootstrap,Tailwind CSS,React JS</h3>
            <p>
            Experienced in building dynamic interfaces with modern technologies.
            </p>
          </div>
          <div className="grid-card">
          <i className="fa-solid fa-server"/>
            <span>Backend Development</span>
            <h3>Node JS,Expres JS</h3>
            <p>
            Knowledgeable in authentication, security, and data handling techniques.
            </p>
          </div>
          <div className="grid-card">
          <i className="fa-solid fa-database"/>
            <span>Database</span>
            <h3>MongoDb</h3>
            <p>
            Knowledgeable in database design, queries, and indexing strategies.
            </p>
          </div>
          <div className="grid-card">
          <i className="fa-solid fa-code" />
            <span>Languages</span>
            <h3>Python,Java,DSA</h3>
            <p>
            Expertise in multiple programming languages for diverse projects.
            </p>
          </div>
        </div>
        <img src="./assets/pro.webp" alt="Profile" />
      </div>
    </section>
  );
};

export default ExperienceSection;
