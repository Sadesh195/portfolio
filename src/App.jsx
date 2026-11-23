
import './App.css'

function App() {
  const stack = [
    {
      title: 'React',
      text: 'Screens for appointments, documents, notifications, and patient and user creation, connected to the APIs.',
    },
    {
      title: 'NestJS',
      text: 'REST APIs in TypeScript for the same features, with role-based access control for every user role.',
    },
    {
      title: 'PostgreSQL',
      text: 'Index tuning and query rewrites that cut query latency by 30%. CSV bulk upload of 10,000+ records per batch.',
    },
    {
      title: 'AWS',
      text: 'Application services deployed on Elastic Beanstalk.',
    },
  ]

  const skills = {
    Frontend: ['React', 'TypeScript'],
    Backend: [
      'Node.js',
      'NestJS',
      'RESTful APIs',
      'RBAC',
      'multer',
      'csv-parser',
    ],
    Database: [
      'PostgreSQL',
      'Query optimisation',
      'Indexing',
      'Schema design',
      'CTEs',
    ],
    'Cloud and tools': [
      'AWS',
      'Apache Superset',
      'Jira',
      'Scrum',
    ],
  }

  const work = [
    'Worked on the frontend and backend of the Healthcare Management System and the Child Welfare Management System using React, NestJS, TypeScript, and PostgreSQL.',
    'Built RESTful APIs for appointments, documents, notifications, user creation, and patient creation.',
    'Built the React screens for these features and integrated them with the APIs.',
    'Implemented role-based access control so each user role reaches only its permitted APIs and data.',
    'Tuned PostgreSQL indexes and rewrote queries to cut query latency by 30%.',
    'Built a CSV bulk-upload pipeline that handles 10,000+ records per batch.',
    'Deployed the application services on AWS Elastic Beanstalk.',
  ]

  return (
    <>
      {/* Navigation */}
      <header className="nav">
        <a className="logo" href="#top">
          Sadesh R
        </a>

        <nav>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <p className="hello">Hi, I’m Sadesh</p>

            <h1>Full Stack Developer</h1>

            <p className="lead">
              I have 3 years of experience building web applications
              for healthcare and child welfare systems with React,
              NestJS, TypeScript, and PostgreSQL.
            </p>

            <div className="btns">
              <a
                className="btn primary"
                href="mailto:sadeshrs1952002@gmail.com"
              >
                Email me
              </a>

              <a className="btn" href="#experience">
                See my work
              </a>
            </div>
          </div>

          <img
            className="photo"
            src="/profile.jpg"
            alt="Sadesh R"
          />
        </section>

        {/* Technology Stack */}
        <section id="stack">
          <h2>How I work across the stack</h2>

          <div className="cards">
            {stack.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2>Experience</h2>

          <div className="job">
            <h3>Full Stack Developer</h3>

            <p className="meta">
              Particle Black India Pvt Ltd · Chennai ·
              Nov 2023 – Oct 2026
            </p>

            <ul>
              {work.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>Skills</h2>

          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-row" key={group}>
              <h3>{group}</h3>

              <div className="tags">
                {items.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section id="education">
          <h2>Education</h2>

          <p>
            <strong>
              B.Tech, Electrical &amp; Electronics Engineering
            </strong>
            <br />
            Pondicherry Technological University · 2019 – 2023
            · CGPA 8.27
          </p>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>Contact</h2>

          <p>
            Based in Pondicherry, India. Open to full stack
            and backend roles.
          </p>

          <div className="btns">
            <a
              className="btn primary"
              href="mailto:sadeshrs1952002@gmail.com"
            >
              sadeshrs1952002@gmail.com
            </a>

            <a
              className="btn"
              href="tel:+918072796465"
            >
              +91 80727 96465
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        © {new Date().getFullYear()} Sadesh R
      </footer>
    </>
  )
}

export default App
