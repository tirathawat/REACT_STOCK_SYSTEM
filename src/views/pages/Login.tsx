import { ReactElement } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as authActions from "../../redux/actions/auth.action";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { LoginData } from "../../types/user";
import LoginForm from "../components/LoginForm";
import { REACT_BACKGROUD_LOGO_IMAGE } from "../../constants/asset";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 200,
  },
});

interface ISubmit {
  setSubmitting: (isSubmitting: boolean) => void;
}

export default function Login(): ReactElement {
  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const initialValues: LoginData = { username: "", password: "" };

  const showForm = (props: any) => LoginForm(props);

  const onSubmit = (loginData: LoginData, form: ISubmit) => {
    form.setSubmitting(true);
    dispatch(authActions.login(loginData, navigate));
  };

  return (
    <Card className={classes.root}>
      {/* Card Image */}
      <CardMedia
        component="img"
        alt="React Logo"
        height="200"
        image={REACT_BACKGROUD_LOGO_IMAGE}
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
