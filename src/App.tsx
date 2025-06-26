import React, { useEffect } from 'react';
import { ContactForm } from './components/ContactForm';
import { NotificationSystem, useNotifications } from './components/NotificationSystem';
import { PortfolioPreview } from './components/PortfolioPreview';
import { trackPageView, trackResumeDownload, trackProjectView } from './services/analyticsService';

function App() {
  const { notifications, addNotification, removeNotification } = useNotifications();

  useEffect(() => {
    // Track initial page view
    trackPageView('Portfolio Home');
  }, []);

  const handleContactSuccess = () => {
    addNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
  };

  const handleContactError = (error: string) => {
    addNotification(error, 'error');
  };

  const handleResumeDownload = () => {
    trackResumeDownload();
    addNotification('Resume download will be available soon!', 'info');
  };

  const handleProjectView = (projectName: string) => {
    trackProjectView(projectName);
    addNotification(`${projectName} - Demo coming soon!`, 'info');
  };

  return (
    <>
      {/* Cherry Blossom Animation */}
      <div className="sakura-container"></div>
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">田</span>
            <span className="logo-name">Tanishka</span>
          </div>
          <div className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#portfolio-preview" className="nav-link">Portfolio</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="greeting">こんにちは</span>
                <span className="name">I'm Tanishka</span>
              </h1>
              <p className="hero-description">
                A passionate developer crafting beautiful digital experiences
                with attention to detail and love for minimalistic design.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => document.getElementById('portfolio-preview')?.scrollIntoView({ behavior: 'smooth' })}>
                  <span>View My Work</span>
                  <div className="btn-shine"></div>
                </button>
                <button className="btn-secondary" onClick={handleResumeDownload}>
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card">
                <div className="card-content">
                  <div className="avatar">
                    <div className="avatar-ring"></div>
                    <div className="avatar-inner">T</div>
                  </div>
                  <div className="card-text">
                    <p>Ready to create something beautiful together</p>
                  </div>
                </div>
                <div className="floating-elements">
                  <div className="cherry-blossom"></div>
                  <div className="cherry-blossom"></div>
                  <div className="cherry-blossom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-subtitle">私について</div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-card">
                <h3>Hello, I'm Tanishka!</h3>
                <p>
                  I'm an accidental engineer getting better at my craft by each passing day,
                  with my head filled with imagination, new ideas, and stories.
                  I love history, sociology, literature, art, and psychology, and the lesser-known films that no one's watching.
                  I create digital experiences that are both functional and beautiful.
                </p>
                <p>
                  My journey in technology started with curiosity to learn new things and has grown into love.
                  I specialize in machine learning and data science, and bringing ideas to life 
                  through clean, efficient code.
                </p>
                <p>
                  When I'm not coding, you can find me exploring nature, practicing mindfulness, 
                  or crafting stories, writing articles, and photographing the world.
                </p>
                <div className="skills-preview">
                  <div className="skill-tag">Data Science</div>
                  <div className="skill-tag">Machine Learning</div>
                  <div className="skill-tag">API Integration</div>
                  <div className="skill-tag">Python</div>
                  <div className="skill-tag">MongoDB</div>
                  <div className="skill-tag">MySQL</div>
                  <div className="skill-tag">Git and GitHub</div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="zen-circle">
                <div className="inner-circle"></div>
                <div className="orbiting-element"></div>
                <div className="orbiting-element"></div>
                <div className="orbiting-element"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <div className="section-subtitle">学歴</div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <h3>Bachelor's Degree</h3>
                  <h4>Computer Science Engineering (Data Science)</h4>
                  <p className="institution">ABES Engineering College</p>
                  <p className="duration">2022 - 2026</p>
                  <p className="description">
                    Focused on Database Management Systems, Computer Networks, Operating Systems, Machine Learning Techniques, Software Engineering, Software Project Management, and Theory of Automata. Maintained excellent academic standing 
                    while participating in various coding competitions and projects.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <h3>Higher Secondary Education</h3>
                  <h4>Science Stream</h4>
                  <p className="institution">Saint Vivekanada Senior Secondary Public School</p>
                  <p className="duration">2021 - 2022</p>                    
                  <p className="score">Score: 81%</p>
                  <p className="description">
                    Specializing in Mathematics, Physics, and Chemistry with Computer Science and Fine Arts.
                    Developed strong analytical and problem-solving skills 
                    that form the foundation of my technical expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <h3>Secondary Education</h3>
                  <h4>Science Stream</h4>
                  <p className="institution">Saint Vivekanada Senior Secondary Public School</p>
                  <p className="duration">2019 - 2020</p>                
                  <p className="score">Score: 93.4%</p>
                  <p className="description">
                    Completed courses in Physics, Chemistry, Mathematics and Computer Science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <div className="section-subtitle">経験</div>
          </div>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="card-header">
                <h3>Machine Learning Engineer</h3>
                <span className="company">Self-Employed</span>
              </div>
              <p className="duration">Jan 2020 - Present</p>
              <ul className="achievements">
                <li>Working on the fine-tuning of Large Language Models like TinyLlama</li>
                <li>Working on Nokotan - A chatbot for psychological help</li>
                <li>Participating in ISRO Bharatiya Antariksh Hackathon</li>
              </ul>
              <div className="tech-stack">
                <span className="tech">Artificial Intelligence</span>
                <span className="tech">Machine Learning</span>
                <span className="tech">Data Cleaning and Analysis</span>
                <span className="tech">Git/GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <div className="section-subtitle">プロジェクト</div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="placeholder-icon">🌸</div>
                </div>
                <div className="project-overlay">
                  <button className="view-project" onClick={() => handleProjectView('Nokotan')}>View Project</button>
                </div>
              </div>
              <div className="project-info">
                <h3>Nokotan</h3>
                <p>A chatbot made to provide initial psychological help to people in need.</p>
                <div className="project-tech">
                  <span>RAG</span>
                  <span>LangChain</span>
                  <span>Vector Database</span>
                  <span>JS, HTML, CSS</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="placeholder-icon">🎨</div>
                </div>
                <div className="project-overlay">
                  <button className="view-project" onClick={() => handleProjectView('Title Extractor')}>View Project</button>
                </div>
              </div>
              <div className="project-info">
                <h3>Title Extractor</h3>
                <p>Fine-tuned TinyLlama model to extract the headings from the uploaded research papers.</p>
                <div className="project-tech">
                  <span>LORA</span>
                  <span>PEFT</span>
                  <span>Tokenization</span>
                  <span>Vector DB</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="placeholder-icon">🛍️</div>
                </div>
                <div className="project-overlay">
                  <button className="view-project" onClick={() => handleProjectView('TaniQ')}>View Project</button>
                </div>
              </div>
              <div className="project-info">
                <h3>TaniQ</h3>
                <p>A modern minimalist portfolio website inspired by the Japanese concepts of "Mono no aware" and "Wabi Sabi"</p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="placeholder-icon">📱</div>
                </div>
                <div className="project-overlay">
                  <button className="view-project" onClick={() => handleProjectView('Pothole Detection System')}>View Project</button>
                </div>
              </div>
              <div className="project-info">
                <h3>Pothole Detection System</h3>
                <p>A Deep Learning based pothole detection system integrated with Google Maps' API showing the location of the pothole on the map.</p>
                <div className="project-tech">
                  <span>YOLO</span>
                  <span>SSD</span>
                  <span>Fast R-CNN</span>
                  <span>API Integration</span>
                  <span>Flask</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="placeholder-icon">📊</div>
                </div>
                <div className="project-overlay">
                  <button className="view-project" onClick={() => handleProjectView('Protein Structure Prediction System')}>View Project</button>
                </div>
              </div>
              <div className="project-info">
                <h3>Protein Structure Prediction System</h3>
                <p>An interactive Streamlit-based app that predicts the structure of over 600 million proteins based on the provided sequences.</p>
                <div className="project-tech">
                  <span>ESM Fold</span>
                  <span>Streamlit</span>
                  <span>py3Dmol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio-preview" className="bg-gray-50 py-16">
        <PortfolioPreview />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let's Connect</h2>
            <div className="section-subtitle">つながりましょう</div>
          </div>
          <div className="contact-content">
            <div className="contact-text">
              <h3>Connect with me</h3>
              <p>
                I'm always excited to work on new projects and meet fellow creators. 
                Whether you have a project in mind or wanna catch up, 
                I'd love to hear from you!
              </p>
              <div className="contact-info">
                <a href="mailto:tanishkasingh1844@gmail.com" className="contact-link">
                  <span className="contact-icon">📧</span>
                  <span>tanishkasingh1844@gmail.com</span>
                </a>
                <a href="tel:+918630875564" className="contact-link">
                  <span className="contact-icon">📱</span>
                  <span>+91 8630875564</span>
                </a>
                <a href="https://www.linkedin.com/in/tanishka-singh-378b3b273/" className="contact-link" target="_blank">
                  <span className="contact-icon">💼</span>
                  <span>linkedin.com/in/tanishka-singh-378b3b273</span>
                </a>
                <a href="https://github.com/tanisan101" className="contact-link" target="_blank">
                  <span className="contact-icon">🐙</span>
                  <span>github.com/tanisan101</span>
                </a>
              </div>
            </div>
            <div className="contact-form-container">
              <ContactForm 
                onSubmitSuccess={handleContactSuccess}
                onSubmitError={handleContactError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Tanishka. Crafted with 💝 and minimalism.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Notification System */}
      <NotificationSystem 
        notifications={notifications}
        onRemove={removeNotification}
      />
    </>
  );
}

export default App;