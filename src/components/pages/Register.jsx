import React from "react";
import { Formik } from "formik";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import RegisterForm from "../templates/RegisterForm";
import {
  API_BASE_URL,
  server,
  REACT_BACKGROUD_LOGO_IMAGE,
} from "../../constants/constants";
import { NORMAL_ERROR } from "../../constants/errors";
import constantMessages from "../../constants/messages";
import * as loginActions from "./../../actions/login.action";
import loginReducer from "../../reducers/login.reducer";

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

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (values, { setSubmitting }) => {
    var result;
    setSubmitting(true);
    try {
      result = await Axios.post(API_BASE_URL + server.Register, values);
      if (result.status !== 200) {
        dispatch(loginActions.hasError(result.data.message));
      }
    } catch (_) {
      dispatch(loginActions.hasError(NORMAL_ERROR));
    }
    setSubmitting(true);
    dispatch(loginActions.setSuccess(result.data.token));
  };

  const onCompleteDialog = () => {
    navigate("/login");
  };

  return (
    <div>
      {/* Card */}
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
            Register
          </Typography>
          {/* Form */}
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {showForm}
          </Formik>
        </CardContent>
      </Card>
      {/* Dialog */}
      <Dialog
        open={!loginReducer.error && loginReducer.result}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* Dialog Title*/}
        <DialogTitle id="alert-dialog-title">
          {constantMessages.REGISTER_COMPLETE_TITLE}
        </DialogTitle>
        <DialogContent>
          {/* Dialog Content Text*/}
          <DialogContentText id="alert-dialog-description">
            {constantMessages.REGISTER_COMPLETE_DETAIL}
          </DialogContentText>
        </DialogContent>
        {/* Dialog Actions*/}
        <DialogActions>
          <Button onClick={onCompleteDialog} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
