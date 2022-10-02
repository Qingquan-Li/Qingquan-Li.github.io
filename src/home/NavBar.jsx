import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container-md">
          <a className="navbar-brand mb-0 h1" href="/">Qingquan Li</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#github">GitHub</a>
              <a className="nav-link" href="#travel">Travel</a>
              {/* <a className="nav-link" href="resume.html" target="_blank">Resume&nbsp; */}
              <Link to="/resume" className="nav-link" target="_blank">
                Resume&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}