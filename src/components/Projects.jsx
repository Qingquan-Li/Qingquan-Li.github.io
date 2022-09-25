import React from 'react';
import './Projects.css';

function Games() {
  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          className="bi bi-controller"
          viewBox="0 0 16 16"
        >
          <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
          <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
        </svg>
      </div>
      <div>
        <h5>Games</h5>
        <p>
          Just for fun:)
          <br />
          1. Match Fruit <span className="fw-light">(Develop with Vue.js)</span>
          <br />
          2. Tic Tac Toe <span className="fw-light">(Develop with React.js)</span>
        </p>
        <a
          href="./match-fruit/"
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          match-fruit
        </a>
        &nbsp;
        <a
          href="./tic-tac-toe/"
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          tic-tac-toe
        </a>
      </div>
    </div>
  );
}

function LearnEnglish() {
  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.9em"
          height="0.9em"
          fill="currentColor"
          className="bi bi-explicit"
          viewBox="0 0 16 16"
        >
          <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
          <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11ZM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11Z" />
        </svg>
      </div>
      <div>
        <h5>LearnEnglish</h5>
        <p>
          This website is designed for people, especially those who speak English as
          a Second Language (ESL) and whose native language is Chinese, to learn
          English.
          <br />
          <span className="fw-light">Develop with Python (Django).</span>
        </p>
        <a
          href="https://learnenglish.qingquanli.com"
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          className="bi bi-bookmark-star"
          viewBox="0 0 16 16"
        >
          <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>
      </div>
      <div>
        <h5>Blog</h5>
        <p>
          My blog is mostly about software development.
          <br />
          <span className="fw-light">
            Hosting on GitHub.
            <br />
            Rendering by React.js.
          </span>
        </p>
        <a
          href="https://qingquanli.com/blog/"
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects-container">
      <h3 className="text-center">
        <a name="projects" href="#projects">
          <span>Projects</span>
        </a>
      </h3>
      <div className="projects-list-container py-5">
        <div className="row g-4 row-cols-1 row-cols-lg-3">
          <Games />
          <LearnEnglish />
          <Blog />
        </div>
      </div>
    </div>
  );
}