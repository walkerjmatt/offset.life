import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "components/SectionHeader";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(3)}px`,
    textAlign: "center",
  },
  section: {
    marginTop: "16px",
  },
}));

function ReadyToOffsetSection(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={classes.section}
    >
      <Container className={classes.container}>
        <Grid container={true} alignItems="center" justify="center" spacing={5}>
          <Grid item={true} xs={12} md="auto">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={4}
            />
          </Grid>
          <Grid item={true} xs={12} md="auto">
            {props.textOnly && (
              <>Thank you for starting your journey to carbon neutrality!</>
            )}
            {!props.textOnly && (
              <Button
                variant="contained"
                size="large"
                color={props.buttonColor}
                onClick={props.onClick}
              >
                {props.buttonText}
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default ReadyToOffsetSection;
