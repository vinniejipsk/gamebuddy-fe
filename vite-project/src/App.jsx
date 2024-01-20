import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import { getUser } from "./service/users";

import AuthPage from "./components/AuthPage/AuthPage";
import LogInForm from "./components/LogInForm/LogInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import CreateReviewForm from "./components/CreateReviewForm/CreateReviewForm";
import UserPage from "./components/UserPage/UserPage";
import ViewReviewPage from "./components/ViewReviewPage/ViewReviewPage";

function App() {
  const [user, setUser] = useState(getUser);

  return (
    <main className="App">
      {
        // ? is if-else statement
        user ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              {/* getUser, updateUser, getReviews endpoints */}
              <Route path="/reviews/create" element={<CreateReviewForm />} />
            </Routes>
            <h1>Welcome, {user}!</h1>
          </>
        ) : (
          <>
            <AuthPage />
            <Routes>
              <Route path="/user/:id" element={<UserPage />} />
              <Route path="/register" element={<SignUpForm />} />
              <Route path="/login" element={<LogInForm />} />
            </Routes>
            {/* <MainPage /> */}
            <Routes>
              <Route path="/reviews/create" element={<CreateReviewForm />} />
              <Route path="/reviews" element={<ViewReviewPage />} />
            </Routes>
          </>
        )
      }
    </main>
  );
}

export default App;
