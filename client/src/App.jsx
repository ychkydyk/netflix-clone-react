import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
    const user = true;
  return  (
      <Router>
        <Route>
          <Route exact path="/">
            {user ? <Home /> : <Navigate to="/register" />}
          </Route>
          <Route path="/register">
            {!user ? <Register /> : <Navigate to="/" />}
          </Route>
          <Route path="/login">{!user ? <Login /> : <Navigate to="/" />}</Route>
          {user && (
              <>
                <Route path="/movies">
                  <Home type="movie" />
                </Route>
                <Route path="/series">
                  <Home type="series" />
                </Route>
                <Route path="/watch">
                  <Watch />
                </Route>
              </>
          )}
        </Route>
      </Router>
  );
};

export default App;
