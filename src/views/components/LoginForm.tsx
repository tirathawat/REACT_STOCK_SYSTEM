import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { LoginData } from "../../types/user";
import { FormikProps } from "formik";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm(props: FormikProps<LoginData>): ReactElement {
  const classes = useStyles();

  const navigate = useNavigate();

  const onClickRegisterButton = (_: any) => {
    navigate("/register");
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
      {/* Sign In Button */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={props.isSubmitting}
        className={classes.submit}
      >
        Sign In
      </Button>
      {/* Register Button */}
      <Button
        onClick={onClickRegisterButton}
        fullWidth
        size="small"
        color="primary"
      >
        Register
      </Button>
    </form>
  );
}
