import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormFields } from "components/SignUpFlow/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import { StyledRadio, StyledFormLabel } from "components/SignUpFlow/styles";

function StepOne(props) {
  const { formik, onNext } = props;
  const useStyles = makeStyles({
    root: {
      width: "50%",
      margin: "auto",
    },
  });
  const buttonClasses = useStyles();

  const [value, setValue] = React.useState(0.1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormFields>
      <FormControl component="fieldset">
        <StyledFormLabel component="legend" classes={{color: "#000000"}}>
          What percentage of your diet is meat?
        </StyledFormLabel>
        <RadioGroup
          aria-label="offsetPercent"
          name="offsetPercent"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="0.10"
            control={<StyledRadio />}
            label="10%"
          />
          <FormControlLabel
            value="0.25"
            control={<StyledRadio />}
            label="25%"
          />
          <FormControlLabel
            value="0.50"
            control={<StyledRadio />}
            label="50%"
          />
          <FormControlLabel
            value="0.75"
            control={<StyledRadio />}
            label="75%"
          />
          <FormControlLabel
            value="1.00"
            control={<StyledRadio />}
            label="100%"
          />
        </RadioGroup>
      </FormControl>
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
