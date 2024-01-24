import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { getUser, logOut } from "./service/users";

import AuthPage from "./components/AuthPage/AuthPage";
import LogInForm from "./components/LogInForm/LogInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import CreateReviewForm from "./components/CreateReviewForm/CreateReviewForm";
import UserPage from "./components/UserPage/UserPage";
import ViewReviewPage from "./components/ViewReviewPage/ViewReviewPage";
import UpdateReviewForm from "./components/CreateReviewForm/UpdateReviewForm";
import { getToken } from "./util/security";

function App() {
  const [user, setUser] = useState(getUser());
  const [userId, setUserId] = useState("");

  // retrieve user id when logged in
  useEffect(() => {
    const token = getToken();
    const payload = token
      ? JSON.parse(atob(token.split(".")[1])).payload
      : null;
    console.log("payload", payload);
    if (payload && payload._id) {
      setUserId(payload._id);
    }
  }, []);

  // console.log("USERID:", userId);

  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <main className="App">
      <NavBar userId={userId} />
      <div style={{ marginTop: "64px" }}>
        {user ? (
          <>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/user/:userId" element={<UserPage />} />
              <Route path="/reviews/create" element={<CreateReviewForm />} />
              <Route path="/reviews/:reviewId" element={<ViewReviewPage />} />
              <Route
                path="/reviews/:reviewId/edit"
                element={<UpdateReviewForm />}
              />
            </Routes>
            <h1>Welcome, {user}!</h1>
            <button onClick={handleLogOut}>Log Out</button>
            <br />
            <Link to="/">Browse Reviews</Link>
          </>
        ) : (
          <>
            <AuthPage />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/register" element={<SignUpForm />} />
              <Route path="/login" element={<LogInForm setUser={setUser} />} />
              <Route path="/reviews/create" element={<CreateReviewForm />} />
              <Route path="/reviews/:reviewId" element={<ViewReviewPage />} />
              <Route
                path="/reviews/:reviewId/edit"
                element={<UpdateReviewForm />}
              />
            </Routes>
          </>
        )}
      </div>
    </main>
  );
}

export default App;
