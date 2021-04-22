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
        <strong>Short Haul Flights</strong>
      </Typography>
      <FormFields>
        <FormControl component="fieldset">
          <StyledFormLabel component="legend">
            How many short haul flights (over 3hrs each way) do you take each
            year?
          </StyledFormLabel>
          <RadioGroup
            aria-label="offsetPercent"
            name="offsetPercent"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={footprintTonValues.shortFlights[0]}
              control={<StyledRadio />}
              label="0"
            />
            <FormControlLabel
              value={footprintTonValues.shortFlights[1]}
              control={<StyledRadio />}
              label="1"
            />
            <FormControlLabel
              value={footprintTonValues.shortFlights[2]}
              control={<StyledRadio />}
              label="2"
            />
            <FormControlLabel
              value={footprintTonValues.shortFlights[3]}
              control={<StyledRadio />}
              label="3"
            />
            <FormControlLabel
              value={footprintTonValues.shortFlights[4]}
              control={<StyledRadio />}
              label="4"
            />
            <FormControlLabel
              value={footprintTonValues.shortFlights[5]}
              control={<StyledRadio />}
              label="5+"
            />
          </RadioGroup>
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          className={buttonClasses.root}
          onClick={() => {
            formik.setFieldValue("shortFlights", value);
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
