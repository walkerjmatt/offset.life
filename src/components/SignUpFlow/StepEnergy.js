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

function StepEnergy(props) {
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

  const [value, setValue] = React.useState(formik.values.homeEnergy);

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
        <strong>House Renewables</strong>
      </Typography>
      <FormFields>
        <FormControl component="fieldset">
          <StyledFormLabel component="legend">
            Does your household run on renewable energy?
          </StyledFormLabel>
          <RadioGroup
            aria-label="offsetPercent"
            name="offsetPercent"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={footprintTonValues.homeEnergy[0]}
              control={<StyledRadio />}
              label="No"
            />
            <FormControlLabel
              value={footprintTonValues.homeEnergy[1]}
              control={<StyledRadio />}
              label="Half"
            />
            <FormControlLabel
              value={footprintTonValues.homeEnergy[2]}
              control={<StyledRadio />}
              label="All"
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
            disabled={value === ""}
            className={buttonClasses.root}
            onClick={() => {
              formik.setFieldValue("homeEnergy", value);
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

export default StepEnergy;
