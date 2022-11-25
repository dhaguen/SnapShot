import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

import { RELATIVE_PATH_BASE_NAME } from "./components/Settings";

class App extends Component {

  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {

    e.preventDefault();
    
    let searchpath = history.location.pathname;
    let searchHistory = searchpath.substring(searchpath.lastIndexOf('/')+1);

    if (searchpath === "" && searchInput === "")
    {
      searchInput = "cat"
    }

    if (searchInput === "LAST_SEARCH")
    {
      searchInput = searchHistory;
    }

    if (e.type === "submit")
    {
      e.currentTarget.reset();
    }
    
    let url = `/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <BrowserRouter basename={RELATIVE_PATH_BASE_NAME} forceRefresh={true}>
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/mountain" />}
              />

              <Route
                path="/mountain"
                render={() => <Item searchTerm="mountain" />}
              />
              <Route path="/beach" render={() => <Item searchTerm="beach" />} />
              <Route path="/bird" render={() => <Item searchTerm="bird" />} />
              <Route path="/food" render={() => <Item searchTerm="food" />} />
              
              <Route
                path="/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}/>

              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
