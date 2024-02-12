// STEPS TO GET THIS THING TO WORK
// stage all changes and then add commit DONT PUSH IT DOES IT FOR YOU
// load veaparz75.github.io to see changes
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Website</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Welcome! I'm glad you found your way to my website. Here's a little bit about me...</p>
          <p>I am passionate about technology, coding, and continuous learning.</p>
          {/* Add more information about yourself here */}
        </section>
        <section>
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me via email or social media:</p>
          <ul>
            <li>Email: iyer94@purdue.edu</li>
            {/* Add your social media links here */}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

