import './App.css';
import NavBar from './components/NavBar';
import Avatar from './components/Avatar';
import SelfIntroduction from './components/SelfIntroduction';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Travel from './components/Travel';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
