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

function StepFlights(props) {
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
        <strong>Shopping Habits</strong>
      </Typography>
      <FormFields>
        <FormControl component="fieldset">
          <StyledFormLabel component="legend">
            How do you spend your money shopping? (not including food)
          </StyledFormLabel>
          <RadioGroup
            aria-label="offsetPercent"
            name="offsetPercent"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={footprintTonValues.shopHabit[0]}
              control={<StyledRadio />}
              label="Frugal (You only buy new when necessary)"
            />
            <FormControlLabel
              value={footprintTonValues.shopHabit[1]}
              control={<StyledRadio />}
              label="Average (You like things that last, but don't say no to casual upgrade)"
            />
            <FormControlLabel
              value={footprintTonValues.shopHabit[2]}
              control={<StyledRadio />}
              label="Shopper (You enjoy shopping the latest and greatest clothes or electronics"
            />
            <FormControlLabel
              value={footprintTonValues.shopHabit[3]}
              control={<StyledRadio />}
              label="Luxury Shopper (Your budget allows for frequent upgrades and fast consumption. )"
            />
          </RadioGroup>
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          className={buttonClasses.root}
          onClick={() => {
            formik.setFieldValue("shopHabit", value);
            onNext();
          }}
        >
          Continue
        </Button>
      </FormFields>
    </>
  );
}

export default StepFlights;