import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Money from "page/Money";
import Account from "page/Account";
import Tags from "page/Tags";
import Layout from "component/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path="/" component={Money} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/tags" component={Tags} />
        </Layout>
      </Router>
    </>
  );
}

export default App;
