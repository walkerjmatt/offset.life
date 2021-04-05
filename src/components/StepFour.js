import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormFields } from "styles/Styles";
import Button from "@material-ui/core/Button";

function StepOne(props) {
  const { formik, onNext } = props;
  const useStyles = makeStyles({
    root: {
      width: "50%",
      margin: "auto",
    },
  });
  const buttonClasses = useStyles();

  return (
    <FormFields>
      <>Whatever the hell we want to say here</>
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
