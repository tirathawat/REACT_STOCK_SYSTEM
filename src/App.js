import React from "react";

import { Container, Box } from "@material-ui/core";

import { useSelector } from "react-redux";

import Header from "./components/templates/Header";
import Menu from "./components/templates/Menu";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Stock from "./components/pages/Stock";
import StockCreate from "./components/pages/StockCreate";
import StockEdit from "./components/pages/StockEdit";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

export default function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const loginReducer = useSelector(({ loginReducer }) => loginReducer);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Router>
      {loginReducer.result && (
        <Header open={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      )}
      {loginReducer.result && (
        <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      )}
      <Container>
        <Box display="flex" flexDirection="row" justifyContent="center" pt={12}>
          <Routes>
            <Route path="/" exact={true} element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/stock" element={<Stock />} />
            <Route
              path="/stock/create"
              exact={true}
              element={<StockCreate />}
            />
            <Route
              path="/stock/edit/:id"
              exact={true}
              element={<StockEdit />}
            />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}
