import React from "react";

import { Container, Box } from "@material-ui/core";

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
      <Container>
        <Box display="flex" flexDirection="row" justifyContent="center" pt={12}>
          <Routes>
            <Route path="/" exact={true} element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}
