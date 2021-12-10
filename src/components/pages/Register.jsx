import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";

import RegisterForm from "../templates/RegisterForm";

import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 200,
  },
});

export default function Register() {
  const classes = useStyles();

  const initialValues = { username: "", password: "" };

  const showForm = (props) => RegisterForm(props);

  const onSubmit = (_, { setSubmitting }) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
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
          Register
        </Typography>
        {/* Form */}
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {showForm}
        </Formik>
      </CardContent>
    </Card>
  );
}
