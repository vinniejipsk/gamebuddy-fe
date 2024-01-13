import { Link } from "react-router-dom";

export default function AuthPage() {
    return (
      <main>
        <h1>Please Log in or Sign up!</h1>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </main>  
    );
}