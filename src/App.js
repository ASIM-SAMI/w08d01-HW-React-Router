import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FamiliesPage from "./pages/FamiliesPage";
import FamilyPage from "./pages/FamilyPage";
import MemberPage from './pages/MemberPage'
import React, { useState } from "react";

function App() {
  const [familySelected, setFamilySelected] = useState({});
  const [memberSelected, setMemberSelected] = useState({});

  return (
    <Router>
      <div className="App">

      <Route  path="/">
          <h1>I appear on all pages"</h1>
       </Route>

        <Route exact path="/families">
          <FamiliesPage setFamilySelected={setFamilySelected} />
        </Route>

        <Route exact path="/families/:family">
          <FamilyPage familySelected={familySelected} />
        </Route>

        <Route exact path="/members/:member">
          <MemberPage />
        </Route>

      
      </div>

    </Router>
  );
}

export default App;
