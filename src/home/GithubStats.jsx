export default function GithubStats() {
  return (
    <div className="github-stats-container">
      <div className="text-center">
        <a href="https://github.com/Qingquan-Li" target="_blank" rel="noopener noreferrer">
          <img
            // src="https://github-readme-stats-qingquan-li.vercel.app/api?username=Qingquan-Li&show_icons=true&theme=graywhite"
            src="https://github-readme-stats.vercel.app/api?username=Qingquan-Li&show_icons=true&theme=graywhite"
            className="img-fluid"
            alt="github.com/Qingquan-Li"
          />
        </a>
      </div>
      <div className="text-center pt-4">
        <a href="https://github.com/Qingquan-Li" target="_blank" rel="noopener noreferrer">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=qingquan-li&layout=compact&langs_count=10"
            className="img-fluid"
            alt="github.com/Qingquan-Li"
          />
        </a>
      </div>
    </div>
  );
}