import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Money from "page/Money";
import Account from "page/Account";
import Tags from "page/Tags";
import Layout from "component/Layout";
import EditTag from "page/EditTag";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Money} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/tags" component={Tags} />
            <Route path="/tags/:id" component={EditTag} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
