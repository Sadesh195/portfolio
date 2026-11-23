
import './App.css'

const linkedinUrl =
  'https://www.linkedin.com/in/sadesh-ravichandran-59192a263'

const stack = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Building responsive user interfaces and connecting frontend screens with backend APIs.',
    technologies: ['React', 'TypeScript', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Backend Development',
    description:
      'Developing REST APIs, business logic, authentication and role-based access control.',
    technologies: ['Node.js', 'NestJS', 'REST APIs', 'RBAC'],
  },
  {
    number: '03',
    title: 'Database Engineering',
    description:
      'Designing database schemas, optimising queries and building reliable bulk-upload workflows.',
    technologies: ['PostgreSQL', 'MongoDB', 'Indexing', 'SQL'],
  },
  {
    number: '04',
    title: 'Cloud & Collaboration',
    description:
      'Working with cloud deployments, reporting tools and collaborative development workflows.',
    technologies: ['AWS', 'Docker', 'Jira', 'Apache Superset'],
  },
]

const projects = [
  {
    number: '01',
    type: 'HEALTHCARE',
    title: 'Healthcare Management System',
    description:
      'Worked on healthcare application modules supporting appointments, patient creation, document management and notifications.',
    contributions: [
      'Developed React screens and NestJS REST APIs.',
      'Implemented role-based access control.',
      'Improved PostgreSQL query performance.',
    ],
    technologies: ['React', 'NestJS', 'TypeScript', 'PostgreSQL'],
  },
  {
    number: '02',
    type: 'CHILD WELFARE',
    title: 'Child Welfare Management System',
    description:
      'Contributed to a child welfare application with user-focused features, backend services and controlled access to application data.',
    contributions: [
      'Built frontend and backend application features.',
      'Developed APIs for application workflows.',
      'Implemented role-based permissions.',
    ],
    technologies: ['React', 'NestJS', 'TypeScript', 'PostgreSQL'],
  },
]

const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  Backend: ['Node.js', 'NestJS', 'RESTful APIs', 'RBAC', 'Multer', 'csv-parser'],
  Database: [
    'PostgreSQL',
    'MongoDB',
    'Query Optimisation',
    'Indexing',
    'Schema Design',
    'CTEs',
  ],
  'Cloud & Tools': [
    'AWS',
    'Docker',
    'Apache Superset',
    'Jira',
    'Git',
    'Scrum',
  ],
}

const work = [
  'Worked on the frontend and backend of Healthcare Management and Child Welfare Management systems using React, NestJS, TypeScript and PostgreSQL.',
  'Built RESTful APIs for appointments, documents, notifications, user creation and patient creation.',
  'Developed React screens and integrated them with backend APIs.',
  'Implemented role-based access control to ensure users access only permitted APIs and data.',
  'Optimised PostgreSQL indexes and queries, reducing query latency by 30%.',
  'Developed a CSV bulk-upload pipeline supporting 10,000+ records per batch.',
  'Deployed application services using AWS Elastic Beanstalk.',
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <div className="nav-container">
          <a className="brand" href="#home" aria-label="Sadesh home">
            <span className="brand-mark">SR</span>
            <span>Sadesh R<span className="brand-dot">.</span></span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
          </nav>

          <a className="nav-contact" href="#contact">
            Let's talk <span>↗</span>
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero section-container">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="hero-intro">Hello, I'm Sadesh R</p>

            <h1>
              Building digital
              <br />
              experiences with
              <br />
              <span>code & creativity.</span>
            </h1>

            <p className="hero-description">
              Full Stack Developer with 3 years of experience building
              web applications for healthcare and child welfare systems.
              I turn complex requirements into reliable, user-friendly
              applications.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a
                className="button button-secondary"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sadeshrs1952002@gmail.com"
              >
                Get in touch
              </a>
            </div>

            <div className="hero-socials">
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn <span>↗</span>
              </a>
              <span className="social-divider">/</span>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sadeshrs1952002@gmail.com">
                Email <span>↗</span>
              </a>
              <span className="social-divider">/</span>
              <span>Pondicherry, India</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-circle circle-one" />
            <div className="visual-circle circle-two" />

            <div className="photo-card">
              <img
                className="profile-photo"
                src="/profile.jpg"
                alt="Portrait of Sadesh R"
              />
              <div className="photo-caption">
                <span className="photo-caption-label">DEVELOPER</span>
                <strong>Sadesh R</strong>
                <span>Full Stack Developer</span>
              </div>
            </div>

            {/* Experience below profile details */}
            <div className="photo-experience">
              <span>✦</span>
              3 Years Experience
            </div>


            <div className="floating-card floating-bottom">
              <span className="floating-icon blue-icon">⌘</span>
              <div>
                <strong>React + NestJS</strong>
                <span>Full Stack Development</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid section-container">
            <div className="stat-item">
              <strong>3<span>+</span></strong>
              <p>Years of experience</p>
            </div>
            <div className="stat-item">
              <strong>02</strong>
              <p>Industry projects</p>
            </div>
            <div className="stat-item">
              <strong>10K<span>+</span></strong>
              <p>Records per CSV batch</p>
            </div>
            <div className="stat-item">
              <strong>30<span>%</span></strong>
              <p>Query latency reduction</p>
            </div>
          </div>
        </section>

        <section id="about" className="content-section section-container">
          <SectionHeading
            eyebrow="GET TO KNOW ME"
            title="About me"
            description="A little about my journey, approach and the work I enjoy doing."
          />

          <div className="about-grid">
            <div className="about-main">
              <h3>
                I enjoy turning ideas into
                <span> useful software.</span>
              </h3>
              <p>
                I'm a Full Stack Developer experienced in building
                web applications using React, Node.js, NestJS and
                PostgreSQL. My work includes developing APIs, creating
                user interfaces, implementing access control and
                improving database performance.
              </p>
              <p>
                I enjoy solving practical problems, writing maintainable
                code and continuously learning technologies that help
                build better applications.
              </p>
              <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">
                Connect on LinkedIn <span>↗</span>
              </a>
            </div>

            <div className="about-note">
              <span className="note-symbol">“</span>
              <p>
                Good software is not just about writing code. It's
                about understanding problems and creating solutions
                that make a difference.
              </p>
              <span className="note-author">MY DEVELOPMENT APPROACH</span>
            </div>
          </div>
        </section>

        <section id="projects" className="content-section projects-section">
          <div className="section-container">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Projects I've worked on"
              description="Industry experience across healthcare and child welfare applications."
            />

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-topline">
                    <span className="project-number">{project.number}</span>
                    <span className="project-type">{project.type}</span>
                  </div>

                  <div className="project-art">
                    <div className="project-art-window">
                      <div className="window-dots">
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="mock-dashboard">
                        <div className="mock-sidebar">
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="mock-content">
                          <div className="mock-title" />
                          <div className="mock-metrics">
                            <span />
                            <span />
                            <span />
                          </div>
                          <div className="mock-chart">
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <ul className="project-contributions">
                    {project.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span className="tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-container">
          <SectionHeading
            eyebrow="WHAT I WORK WITH"
            title="My technology stack"
            description="Tools and technologies I use to build and maintain applications."
          />

          <div className="stack-grid">
            {stack.map((item) => (
              <article className="stack-card" key={item.title}>
                <span className="stack-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">
                  {item.technologies.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section experience-section">
          <div className="section-container">
            <SectionHeading
              eyebrow="MY JOURNEY"
              title="Professional experience"
              description="My industry experience and key contributions."
            />

            <article className="experience-card">
              <div className="experience-heading">
                <div>
                  <span className="experience-label">PROFESSIONAL EXPERIENCE</span>
                  <h3>Full Stack Developer</h3>
                  <p>Particle Black India Pvt Ltd · Chennai, India</p>
                </div>
                <span className="experience-date">Nov 2023 – Oct 2026</span>
              </div>

              <div className="experience-divider" />

              <h4>Key responsibilities & achievements</h4>
              <ul className="experience-list">
                {work.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="tag-list">
                {['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'AWS'].map(
                  (technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="content-section section-container">
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title="Technical skills"
            description="A practical combination of frontend, backend, database and cloud technologies."
          />

          <div className="skills-grid">
            {Object.entries(skills).map(([group, items], index) => (
              <article className="skill-card" key={group}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group}</h3>
                <div className="tag-list">
                  {items.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="content-section education-section">
          <div className="section-container">
            <SectionHeading
              eyebrow="ACADEMIC BACKGROUND"
              title="Education"
            />

            <div className="education-card">
              <div className="education-icon">ED</div>
              <div>
                <span className="experience-label">2019 – 2023</span>
                <h3>B.Tech – Electrical & Electronics Engineering</h3>
                <p>Pondicherry Technological University</p>
              </div>
              <div className="education-score">
                <strong>8.27</strong>
                <span>CGPA</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-container contact-inner">
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>
              Have a project or
              <br />
              opportunity in mind?
            </h2>
            <p>
              I'm open to Full Stack and Backend Developer opportunities.
              Let's connect and discuss how I can contribute to your team.
            </p>

            <div className="contact-actions">
              <a
                className="button button-white"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sadeshrs1952002@gmail.com"
              >
                Send me an email <span>↗</span>
              </a>
              <a
                className="button button-outline-white"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <span>↗</span>
              </a>
            </div>

            <div className="contact-details">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sadeshrs1952002@gmail.com">
                sadeshrs1952002@gmail.com
              </a>
              <a href="tel:+918072796465">+91 80727 96465</a>
              <span>Pondicherry, India</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">SR</span>
            <span>Sadesh R<span className="brand-dot">.</span></span>
          </a>

          <p>Designed & built with care by Sadesh R.</p>

          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>

          <span>© {new Date().getFullYear()} Sadesh R</span>
        </div>
      </footer>
    </>
  )
}

export default App
