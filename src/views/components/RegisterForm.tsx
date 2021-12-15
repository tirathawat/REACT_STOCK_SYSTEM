import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { LoginData } from "../../types/user";
import { FormikProps } from "formik";
import { useSelector } from "react-redux";
import { AuthState } from "../../types/state";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm(props: FormikProps<LoginData>): ReactElement {
  const classes = useStyles();

  const navigate = useNavigate();

  const authReducer = useSelector<any, AuthState>(
    (reducer) => reducer.authReducer
  );

  const onClickCancelButton = (_: any) => {
    navigate(-1);
  };

  return (
    <form className={classes.submit} noValidate onSubmit={props.handleSubmit}>
      {/* Username Form */}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        value={props.values.username}
        onChange={props.handleChange}
        label="Username"
        autoComplete="email"
        autoFocus
      />
      {/* Password Form */}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="password"
        label="Password"
        value={props.values.password}
        onChange={props.handleChange}
        type="password"
        name="password"
        autoComplete="current-password"
        autoFocus
      />
      {/* Alert */}
      {authReducer.errorMessage && (
        <Alert severity="error">{authReducer.errorMessage}</Alert>
      )}
      {/* Register Button */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={props.isSubmitting}
        className={classes.submit}
      >
        Register
      </Button>
      {/* Cancel Button */}
      <Button
        onClick={onClickCancelButton}
        fullWidth
        size="small"
        color="primary"
      >
        Cancel
      </Button>
    </form>
  );
}
