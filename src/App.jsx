import React from "react";
import { Route, Routes } from "react-router-dom";

//scss
import "./App.scss";

//pages
import useAuth from "./hooks/useAuth";
import Private from "./Private";
import Public from "./Public";

import "./App.scss";
import Home from "./pages/Home/Home";
// import Motivat from './pages/Home/media/motivat/motivat';
import Motivat from "./pages/Home/media/motivat/motivat";
import Search from "./pages/Home/Search/Search";
import Design from "./pages/Home/media/design/Design";
import Profile from "./pages/Profile/Profile";
import Searches from "./pages/Profile/searches/searches";
import Notdesign from "./notDesign/notDesign";
//context

function App() {
  const [token] = useAuth(true);
  let localData = localStorage.getItem("login");
  let data = JSON.parse(localData);

  if (token) {
    if (data) {
      return (
        <>
          <div className="container">
            <div className="app">
              <Private />
              <Routes>
                <Route path="/home" element={<Profile />} />
                <Route path="/profile/*" element={<Home />} />
              </Routes>
              <Routes>
                <Route path="/profile/*" element={<Search />} />
              </Routes>
              <Routes>
                <Route path="/home/*" element={<Searches />} />
              </Routes>
              <Routes>
                <Route path="/explore" element={<Notdesign />} />
                <Route path="/notifications" element={<Notdesign />} />
                <Route path="/messages" element={<Notdesign />} />
                <Route path="/bookmarks" element={<Notdesign />} />
                <Route path="/lists" element={<Notdesign />} />
                <Route path="/more" element={<Notdesign />} />
              </Routes>
            </div>
            <div>
              <Routes>
                <Route path="/profile/tweets" element={<Motivat />} />
                <Route path="/profile/replies" element={<Design />} />
                <Route path="/profile/medias" element={<Design />} />
                <Route path="/profile/likes" element={<Design />} />
              </Routes>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <Public />
    </>
  );
}

export default App;
