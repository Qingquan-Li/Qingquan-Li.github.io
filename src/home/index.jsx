import './index.css';
import Avatar from './Avatar';
import Introduction from './Introduction';
import Tags from './Tags';
import GithubStats from './GithubStats';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <Avatar />
        <Introduction />
        <Tags />
        <GithubStats />
      </div>
    </div>
  )
}