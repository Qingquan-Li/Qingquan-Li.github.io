import './index.css';
import React from 'react';
import NavBar from './NavBar';
import Avatar from './Avatar';
import SelfIntroduction from './SelfIntroduction';
import Projects from './Projects';
import GithubStats from './GithubStats';
import Travel from './Travel';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <NavBar />
        <Avatar />
        <SelfIntroduction />
        <Projects />
        <GithubStats />
        <Travel />
      </div>
    </div>
  )
}