import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <>
      <h1 className="logo">Martin's Monsters Game</h1>
      <div className="card">
        <Link to="/dialog">
          <button>Tap to Start</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
