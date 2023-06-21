import React from 'react';
import './App.css';

import githubLogo from './assets/github-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import codeLogo from './assets/code-image.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-container">
          <div className="intro-container">
            <div className="Intro">
              <h1>Hi, I'm</h1>
            </div>
            <div className="Name">
              <h2>
                <span className="first-name">Kingsley</span>{" "}
                <span className="last-name">Yamoah</span>
              </h2>
            </div>
            <div className="JobTitle">
              <h3>Junior Software Engineer</h3>
            </div>
          </div>
        </div>
        <div className="code-image-container">
          <img src={codeLogo} alt="Code Logo" className="code-image" />
          <div className="logo-container">
            <a href="https://github.com/kingyam0">
              <img src={githubLogo} alt="GitHub Logo" className="logo" />
            </a>
            <a href="https://www.linkedin.com/in/kky10/">
              <img src={linkedinLogo} alt="LinkedIn Logo" className="logo" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;