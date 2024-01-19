import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./service/users";

import AuthPage from './components/AuthPage/AuthPage'
import LogInForm from './components/LogInForm/LogInForm'
import SignUpForm from './components/SignUpForm/SignUpForm'
import MainPage from './components/MainPage/MainPage'
import NavBar from './components/NavBar/NavBar'
import CreateReviewForm from './components/CreateReviewForm/CreateReviewForm'
import UserPage from './components/UserPage/UserPage'
import ViewReviewPage from './components/ViewReviewPage/ViewReviewPage'

function App() {
  const [user, setUser] = useState(getUser);

  return (
    <main className="App">
      <NavBar />
      <div style={{ marginTop: '64px' }}>
        {
          user ? (
            <>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="/reviews/create" element={<CreateReviewForm />} />
              </Routes>
              <h1>Welcome, {user}!</h1>
            </>
          ) : (
            <>
              <AuthPage />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/register" element={<SignUpForm />} />
                <Route path="/login" element={<LogInForm />} />
                <Route path="/reviews/create" element={<CreateReviewForm />} />
                <Route path="/reviews" element={<ViewReviewPage />} />
              </Routes>
            </>
          )
        }
      </div>
    </main>
  );
}

export default App;