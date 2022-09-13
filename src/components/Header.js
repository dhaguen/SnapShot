import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";
import Settings from "./Settings";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>The Gallery</h1><br/>
      <Settings history={history} handleSubmit={handleSubmit}/>
      <Navigation />
      <Form history={history} handleSubmit={handleSubmit} />
    </div>
  );
};


export default Header;
