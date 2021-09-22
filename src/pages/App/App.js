import { Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "components/Header";
import PersonTable from "pages/PersonTable";

import "./App.scss";

export const history = createBrowserHistory();

const App = () => {
  return (
    <div className="app">
      <Header headerText={"Address Book App"} />

      <main className="main">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={PersonTable} />
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
