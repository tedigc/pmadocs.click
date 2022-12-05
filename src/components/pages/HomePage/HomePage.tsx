import { Link } from "react-router-dom";

export default function OverviewPage() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/overview">Introduction</Link>
        </li>
        <li>
          <Link to="/overview">Overview</Link>
        </li>
      </ul>
    </div>
  );
}
