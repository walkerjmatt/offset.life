import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormFields } from "components/SignUpFlow/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function StepOne(props) {
  const { formik, onNext} = props;
  const useStyles = makeStyles({
    root: {
      width: "50%",
      margin: "auto",
    },
  });
  const buttonClasses = useStyles();
  return (
    <FormFields>
      <TextField
        variant="outlined"
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        variant="outlined"
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        color="primary"
        variant="contained"
        className={buttonClasses.root}
        onClick={onNext}
      >
        Continue
      </Button>
    </FormFields>
  );
}

export default StepOne;
