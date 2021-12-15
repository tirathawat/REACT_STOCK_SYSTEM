import { ReactElement } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AuthState } from "../../types/state";
import * as authActions from "../../redux/actions/auth.action";
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
import { RegisterData } from "../../types/user";
import RegisterForm from "../components/RegisterForm";
import { REACT_BACKGROUD_LOGO_IMAGE } from "../../constants/asset";
import * as Messages from "../../constants/messages";

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

  const initialValues: RegisterData = { username: "", password: "" };

  const showForm = (props: any) => RegisterForm(props);

  const onSubmit = async (data: RegisterData, form: ISubmit) => {
    form.setSubmitting(true);
    dispatch(authActions.register(data));
    form.setSubmitting(true);
  };

  const authReducer = useSelector<any, AuthState>(
    (reducer) => reducer.authReducer
  );

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
        open={!authReducer.errorMessage && authReducer.user !== null}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* Dialog Title*/}
        <DialogTitle id="alert-dialog-title">
          {Messages.REGISTER_COMPLETE_TITLE}
        </DialogTitle>
        <DialogContent>
          {/* Dialog Content Text*/}
          <DialogContentText id="alert-dialog-description">
            {Messages.REGISTER_COMPLETE_DETAIL}
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
