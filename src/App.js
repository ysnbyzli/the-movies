import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChangeDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }


  return (
    <div className="">

      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route exact path="/">
            <Header handleChangeDarkMode={handleChangeDarkMode} />
            <Home />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
