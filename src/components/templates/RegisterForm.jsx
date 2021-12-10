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

RegisterForm.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
};

export default function RegisterForm({
  values,
  handleChange,
  handleSubmit,
  isSubmitting,
}) {
  const classes = useStyles();

  const navigate = useNavigate();

  const onClickCancelButton = (_) => {
    navigate(-1);
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
      {/* Register Button */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting}
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
