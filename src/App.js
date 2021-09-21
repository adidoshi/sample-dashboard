import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Maincontent from "./Components/Maincontent";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import Cardspage from "./Components/Cardspage";
import Colors from "./Components/Colors";
import Borders from "./Components/Borders";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <Router>
      <div className="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <Switch>
                <Route exact path="/">
                    <Maincontent />
                  </Route>
                <Route excat path="/button">
                  <Button />
                </Route>
                <Route excat path="/cards">
                  <Cardspage />
                </Route>
                <Route excat path="/colors">
                  <Colors />
                </Route>
                <Route excat path="/borders">
                  <Borders />
                </Route>
                <Route excat path="/create">
                  <Create />
                </Route>
                <Route excat path="/read">
                  <Read />
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
