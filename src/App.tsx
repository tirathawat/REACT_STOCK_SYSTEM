import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { AuthState } from "./types/state";
import { Container, Box } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import Header from "./views/templates/Header";
import Menu from "./views/templates/Menu";

import Login from "./views/pages/Login";
import Register from "./views/pages/Register";
import Stock from "./views/pages/Stock";
import StockCreate from "./views/pages/StockCreate";
import StockEdit from "./views/pages/StockEdit";

function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const authReducer = useSelector<any, AuthState>(
    (reducer) => reducer.authReducer
  );

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Router>
      {authReducer.user && (
        <Header open={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      )}
      {authReducer.user && (
        <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      )}
      <Container>
        <Box display="flex" flexDirection="row" justifyContent="center" pt={12}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/stock/create" element={<StockCreate />} />
            <Route path="/stock/edit/:id" element={<StockEdit />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
