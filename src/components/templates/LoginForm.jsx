import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

LoginForm.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
};

export default function LoginForm({
  values,
  handleChange,
  handleSubmit,
  isSubmitting,
}) {
  const classes = useStyles();

  const navigate = useNavigate();

  const onClickRegisterButton = (_) => {
    navigate("/register");
  };

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit}>
      {/* Username Form */}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        value={values.username}
        onChange={handleChange}
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
        value={values.password}
        onChange={handleChange}
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
        disabled={isSubmitting}
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
