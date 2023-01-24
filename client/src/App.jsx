import React, {Fragment} from 'react';

import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
    BrowserRouter as Router,
    Route,
    Navigate, Routes,
} from "react-router-dom";

const App = () => {
    const user = true;
  return  (
      <Router>
          <Fragment>
        <Routes>
          <Route exact path="/"  element= {user ? <Home /> : <Navigate to="/register" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />}/>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}  />
          {user && (
              <>
                <Route path="/movies" element={<Home type="movie" />}></Route>
                <Route path="/series" element={<Home type="series" />}></Route>
                <Route path="/watch" element={<Watch />}></Route>
              </>
          )}
        </Routes>
          </Fragment>
      </Router>
  );
};

export default App;
