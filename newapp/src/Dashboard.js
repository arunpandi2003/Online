import React from 'react';
import './Dashboard.css'; // Custom CSS for styling
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <main className="dashboard-container">
      <header className="dashboard-header">
        <h1>Online Examination System</h1>
        <nav>
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/exams">Exams</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
      </header>

      <section className="dashboard-content">
        <div className="dashboard-card">
          <h2>Upcoming Exams</h2>
          <p>Check your schedule and prepare accordingly.</p>
          <button>View Details</button>
        </div>

        <div className="dashboard-card">
          <h2>Active Exams</h2>
          <p>Start your exam when it’s time. Be sure to submit before the deadline.</p>
          <Link to='/qusetion'><button>Start Exam</button></Link>
        </div>

        <div className="dashboard-card">
          <h2>Completed Exams</h2>
          <p>View your past performance and feedback from your instructors.</p>
          <button>View Results</button>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
