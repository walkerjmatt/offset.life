import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormFields } from "styles/Styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { footprintTonValues } from "util/constants";

import { StyledRadio, StyledFormLabel } from "styles/Styles";

function StepJourney(props) {
  const { formik, onNext } = props;
  const useStyles = makeStyles({
    root: {
      width: "50%",
      margin: "auto",
    },
    header: {
      marginBottom: "0px",
    },
  });
  const buttonClasses = useStyles();

  const [value, setValue] = React.useState(0.1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  /*

select which you use the most often: car, bus, train, carpool, bike, walk
  */

  return (
    <>
      <Typography
        variant="h6"
        paragraph={true}
        className={buttonClasses.header}
      >
        <strong>Car</strong>
      </Typography>
      <FormFields>
        <FormControl component="fieldset">
          <StyledFormLabel component="legend">
            Do you own a car?
          </StyledFormLabel>
          <RadioGroup
            aria-label="offsetPercent"
            name="offsetPercent"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={footprintTonValues.ownCar[0]}
              control={<StyledRadio />}
              label="No"
            />
            <FormControlLabel
              value={footprintTonValues.ownCar[1]}
              control={<StyledRadio />}
              label="No, but I share one with someone else"
            />
            <FormControlLabel
              value={footprintTonValues.ownCar[2]}
              control={<StyledRadio />}
              label="Yes"
            />
            <FormControlLabel
              value={footprintTonValues.ownCar[3]}
              control={<StyledRadio />}
              label="Yes and it's electric"
            />
          </RadioGroup>
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          className={buttonClasses.root}
          onClick={() => {
            formik.setFieldValue("ownCar", value);
            onNext();
          }}
        >
          Continue
        </Button>
      </FormFields>
    </>
  );
}

export default StepJourney;
