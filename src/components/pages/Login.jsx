import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as loginActions from "./../../actions/login.action";

import LoginForm from "../templates/LoginForm";

import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 200,
  },
});

export default function Login() {
  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const initialValues = { username: "", password: "" };

  const showForm = (props) => LoginForm(props);

  const onSubmit = (value, { setSubmitting }) => {
    setSubmitting(true);
    dispatch(loginActions.login({ ...value, navigate }));
  };

  return (
    <Card className={classes.root}>
      {/* Card Image */}
      <CardMedia
        component="img"
        alt="React Logo"
        height="200"
        image="images/react-logo-background.png"
      />
      {/* Card Content */}
      <CardContent>
        {/* Title */}
        <Typography gutterBottom variant="h5" component="h2">
          Login
        </Typography>
        {/* Form */}
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {showForm}
        </Formik>
      </CardContent>
    </Card>
  );
}
