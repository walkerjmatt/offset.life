import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormFields } from "styles/Styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { footprintTonValues } from "util/constants";

import { StyledRadio, StyledFormLabel, ButtonContainer } from "styles/Styles";

function StepDriving(props) {
  const { formik, onNext, onBack } = props;
  const useStyles = makeStyles({
    root: {
      width: "50%",
      margin: "auto",
    },
    backButton: {
      width: "50%",
      marginRight: "8px",
    },
    header: {
      marginBottom: "0px",
    },
  });
  const buttonClasses = useStyles();

  const [value, setValue] = React.useState(formik.values.milesDriven);

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
        <strong>Driving</strong>
      </Typography>
      <FormFields>
        <FormControl component="fieldset">
          <StyledFormLabel component="legend">
            How many miles do you drive (or spend) in the car per year?
          </StyledFormLabel>
          <RadioGroup
            aria-label="offsetPercent"
            name="offsetPercent"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={footprintTonValues.milesDriven[0]}
              control={<StyledRadio />}
              label="Up to 3,000 miles"
            />
            <FormControlLabel
              value={footprintTonValues.milesDriven[1]}
              control={<StyledRadio />}
              label="Between 3,000-6,000 miles"
            />
            <FormControlLabel
              value={footprintTonValues.milesDriven[2]}
              control={<StyledRadio />}
              label="Between 6,000-10,000 miles"
            />
            <FormControlLabel
              value={footprintTonValues.milesDriven[3]}
              control={<StyledRadio />}
              label="10,000+ miles"
            />
          </RadioGroup>
        </FormControl>
        <ButtonContainer>
          <Button
            color="secondary"
            variant="contained"
            className={buttonClasses.backButton}
            onClick={() => {
              onBack();
            }}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={buttonClasses.root}
            disabled={value === ""}
            onClick={() => {
              formik.setFieldValue("milesDriven", value);
              onNext();
            }}
          >
            Continue
          </Button>
        </ButtonContainer>
      </FormFields>
    </>
  );
}

export default StepDriving;
