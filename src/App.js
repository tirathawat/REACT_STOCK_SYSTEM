import React from "react";

import { Container } from "@material-ui/core";

import Header from "./components/templates/Header";
import Menu from "./components/templates/Menu";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

export default function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Router>
      <Header open={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      <Container pt={12}>
        <Routes>
          <Route
            path="/"
            exact={true}
            component={() => <Navigate to="/login" />}
          />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Routes>
      </Container>
    </Router>
  );
}
