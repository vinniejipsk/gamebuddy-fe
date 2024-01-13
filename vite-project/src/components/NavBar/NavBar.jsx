import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/reviews">Reviews</Link>
      &nbsp; | &nbsp;
      <Link to="/reviews/create">Create Review</Link>
    </nav>
  );
}