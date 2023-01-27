import React from 'react';
import "./GithubStats.css"

export default function GithubStats() {
  return (
    <div className="github-stats-container">
      <h3 className="text-center">
        <a name="github" href="#github">
          <span>GitHub</span>
        </a>
      </h3>
      <div className="text-center py-4">
        <a href="https://github.com/Qingquan-Li" target="_blank" rel="noopener noreferrer">
          <img
            // src="https://github-readme-stats-qingquan-li.vercel.app/api?username=Qingquan-Li&show_icons=true&theme=graywhite"
            src="https://github-readme-stats.vercel.app/api?username=Qingquan-Li&show_icons=true&theme=graywhite"
            className="img-fluid"
            alt="github.com/Qingquan-Li"
          />
        </a>
      </div>
    </div>
  );
}