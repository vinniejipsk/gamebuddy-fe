import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { getUser, logoutUser } from "./service/users";

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
  const [userData, setUserData] = useState({});

  // retrieve user id when logged in
  useEffect(() => {
    const token = getToken();
    const payload = token
      ? JSON.parse(atob(token.split(".")[1])).payload
      : null;
    if (payload && payload._id) {
      setUserId(payload._id);
    }
  }, []);

  function handleLogOut() {
    logoutUser();
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
              <Route
                path="/user/:userId"
                element={
                  <UserPage userData={userData} setUserData={setUserData} />
                }
              />
              <Route path="/reviews/create" element={<CreateReviewForm />} />
              <Route path="/reviews/:reviewId" element={<ViewReviewPage />} />
              <Route
                path="/reviews/:reviewId/edit"
                element={<UpdateReviewForm />}
              />
            </Routes>
            <button onClick={handleLogOut}>Log Out</button>
          </>
        ) : (
          <>
            <AuthPage />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/register" element={<SignUpForm />} />
              <Route
                path="/login"
                element={<LogInForm setUser={setUser} setUserId={setUserId} />}
              />
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
