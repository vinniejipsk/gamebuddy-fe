import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function AuthPage() {
    return (
      <main>
        {/* Sign Up Button */}
        <Button
          component={Link}
          to="/register"
          variant="outlined"
          size="small"
        >
          Sign Up
        </Button>
        
        {/* Sign In Button */}
        <Button
          component={Link}
          to="/login"
          variant="outlined"
          size="small"
        >
          Sign In
        </Button>
      </main> 
    );
}