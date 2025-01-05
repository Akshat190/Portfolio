const AboutSection = () => {
    const handleDownloadCV = () => {
      const link = document.createElement('a');
      link.href = './assets/Resume1.pdf'; 
      link.download = 'Akshat_Choksi_CV.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    const handleContactMe = () => {
        window.open('mailto:akshatchoksi2003@gmail.com');
    };
    
  
    return (
      <section className="about" id="about">
        <div className="about-container">
          <img src="./assets/pro.webp" alt="Akshat Choksi" />
          <div className="info-box">
            <div className="text">
              <h3>Hi, Im</h3>
              <h1>Akshat Choksi</h1>
              <span>Frontend Developer</span><br/>
              <span>Python Developer</span>
            </div>
            <div className="btn-group">
              <button className="btn" onClick={handleDownloadCV}>
                Download CV
              </button>
              <button className="btn" onClick={handleContactMe}>
                Contact Me
              </button>
            </div>
            <div className="socials">
              <a href="https://github.com/Akshat190" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/akshat-choksi-b0b15a28b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  