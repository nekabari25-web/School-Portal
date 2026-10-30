import { Link } from "react-router-dom";
import "./About.css";
import Header from '../Component/Header/Header'
import Footer from "../Component/Footer/Footer";

function About() {
return ( <div className="about-page">

  <Header />
  {/* Navigation Bar */}
  <nav className="navbar">
    <div className="logo">
      <span className="logo-icon"></span>
      <span className="logo-text">SCHOOL PORTAL</span>
    </div>

    {/* <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about" className="active">About Us</Link></li>
      <li><a href="#schools">For Schools</a></li>
      <li><a href="#teachers">For Teachers</a></li>
      <li><a href="#parents">For Families</a></li>
    </ul> */}

    <Link to="/history" className="nav-button">
      Our History
    </Link>
  </nav>

  {/* About Portal Introduction */}
  <section className="portal-hero">
    <div className="portal-hero-content">
      <span className="portal-label">WHO WE ARE</span>

      <h1>
        About the <span>School</span> Management Portal
      </h1>

      <p>
        A smarter way to manage school life. Our integrated school
        management portal brings administrators, teachers, students,
        and parents together in one convenient digital environment.
      </p>

      <a href="#portal-details" className="portal-button">
        Discover Our Portal <span>→</span>
      </a>
    </div>
  </section>

  {/* Portal Information */}
  <section className="portal-intro" id="portal-details">
    <div className="portal-intro-image">
      <img
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
        alt="Students learning together in a classroom"
      />
    </div>

    <div className="portal-intro-text">
      <span className="portal-label">ABOUT OUR PLATFORM</span>

      <h2>Bringing Every Part of School Life Together</h2>

      <p>
        The School Management Portal is designed to simplify
        everyday school operations by connecting school administration,
        teachers, students, and families through one accessible platform.
      </p>

      <p>
        From attendance tracking and assessments to timetables,
        classroom communication, result management, and school fee
        payments, the portal helps make school activities more organised,
        transparent, and convenient.
      </p>

      <p>
        With support for card and bank transfer payments, the platform
        helps families manage school fees while giving school
        administrators a clearer view of important school activities.
      </p>
    </div>
  </section>

  {/* Who It's For */}
  <section className="portal-audience">
    <div className="audience-heading">
      <span className="portal-label">WHO IT'S FOR</span>
      <h2>One Portal, Three Powerful Experiences</h2>
      <p>
        Designed to meet the everyday needs of everyone involved
        in the learning journey.
      </p>
    </div>

    <div className="audience-grid">

      {/* Schools */}
      <article className="audience-card" id="schools">
        <div className="audience-image">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85"
            alt="School building representing school administration"
            loading="lazy"
          />
        </div>

        <div className="audience-content">
          <span className="audience-number">01</span>
          <h3>For Schools</h3>

          <p>
            Take control of school operations with tools that help
            administrators monitor overall performance, manage portal
            settings, supervise classes and teachers, and oversee
            school fee activities from a central dashboard.
          </p>

          <ul>
            <li>Centralised school administration</li>
            <li>Class and teacher monitoring</li>
            <li>Performance and fee management</li>
          </ul>
        </div>
      </article>

      {/* Teachers */}
      <article className="audience-card" id="teachers">
        <div className="audience-image">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=85"
            alt="Teacher supporting students in a classroom"
            loading="lazy"
          />
        </div>

        <div className="audience-content">
          <span className="audience-number">02</span>
          <h3>For Teachers</h3>

          <p>
            Make teaching and classroom management easier. Teachers
            can create assignments and quizzes, communicate with
            their classes, record student marks, and organise
            academic activities around the school timetable.
          </p>

          <ul>
            <li>Assignments and online quizzes</li>
            <li>Student assessment and results</li>
            <li>Class communication and timetables</li>
          </ul>
        </div>
      </article>

      {/* Students and Parents */}
      <article className="audience-card" id="parents">
        <div className="audience-image">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85"
            alt="Students studying and learning"
            loading="lazy"
          />
        </div>

        <div className="audience-content">
          <span className="audience-number">03</span>
          <h3>For Students & Parents</h3>

          <p>
            Stay connected to the learning journey. Students and
            parents can access dashboards, check academic results,
            receive school announcements, submit assessments, and
            manage school fee payments conveniently.
          </p>

          <ul>
            <li>Student dashboards and academic results</li>
            <li>School announcements and updates</li>
            <li>Assessment submissions and fee payments</li>
          </ul>
        </div>
      </article>

    </div>
  </section>

  {/* Closing Section */}
  <section className="portal-closing">
    <div>
      <span className="portal-label">A BETTER SCHOOL EXPERIENCE</span>
      <h2>Making School Management Simpler for Everyone</h2>

      <p>
        By bringing essential school services together, the
        School Management Portal helps create a more connected,
        organised, and supportive educational community.
      </p>
    </div>
  </section>
  <Footer />

</div>


);
}

export default About;
