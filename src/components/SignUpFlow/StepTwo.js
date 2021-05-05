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

function StepOne(props) {
  const { formik, onNext, onBack } = props;
  const useStyles = makeStyles({
    root: {
      width: "50%",
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

  const [value, setValue] = React.useState(formik.values.diet);

  const handleChange = (event) => {
    console.log("event: ", event.target.value);
    setValue(event.target.value);
  };

  return (
    <>
      <Typography
        variant="h6"
        paragraph={true}
        className={buttonClasses.header}
      >
        <strong>Food Tracking</strong>
      </Typography>
      <FormFields>
        <FormControl component="fieldset">
          <StyledFormLabel component="legend">
            Which of the following best describes your average daily food
            consumption?
          </StyledFormLabel>
          <RadioGroup
            aria-label="offsetPercent"
            name="offsetPercent"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={footprintTonValues.diet[5]}
              control={<StyledRadio />}
              label="Lots of meat (over 100g/day- 1 steak or serving of mince)"
            />
            <FormControlLabel
              value={footprintTonValues.diet[4]}
              control={<StyledRadio />}
              label="Medium meat (meat every other day on avg)"
            />
            <FormControlLabel
              value={footprintTonValues.diet[3]}
              control={<StyledRadio />}
              label="Low meat (some meat but no beef)"
            />
            <FormControlLabel
              value={footprintTonValues.diet[2]}
              control={<StyledRadio />}
              label="Pescatarian (serving of fish or sea food every other day on avg)"
            />
            <FormControlLabel
              value={footprintTonValues.diet[1]}
              control={<StyledRadio />}
              label="Vegetarian (no meat, but eggs and dairy)"
            />
            <FormControlLabel
              value={footprintTonValues.diet[0]}
              control={<StyledRadio />}
              label="Vegan (no animal products)"
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
              formik.setFieldValue("diet", value);
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

export default StepOne;
