import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function StatsSection(props) {
  const items = [
    {
      title: "Tweets",
      stat: "3,456",
    },
    {
      title: "Following",
      stat: "123",
    },
    {
      title: "Followers",
      stat: "456k",
    },
    {
      title: "Likes",
      stat: "789",
    },
  ];

  const useStyles = makeStyles((theme) => ({
    section: {
      margin: "auto",
      width: "180px",
      marginBottom: "32px",
    },
    root: {
      paddingTop: "32px",
    },
    sub: {
      marginTop: "8px",
    },
  }));
  const buttonClasses = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={buttonClasses.root}
    >
      <Typography variant="h4" className={buttonClasses.section}>
        Our Goals
      </Typography>
      <Container>
        <Grid container={true} justify="center" spacing={4}>
          <Grid item={true} xs={12} sm={3}>
            <Box textAlign="center">
              <Typography variant="h5" className={buttonClasses.sub}>
                Aggregate and develop projects that take CO2 out of the air
              </Typography>
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={3}>
            <Box textAlign="center">
              <Typography variant="h5" className={buttonClasses.sub}>
                Create comparable and realistic visualizations of individual
                carbon impact
              </Typography>
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={3}>
            <Box textAlign="center">
              <Typography variant="h5" className={buttonClasses.sub}>
                Inform and inspire communities about their environment
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default StatsSection;

/*

 {items.map((item, index) => (
            <Grid item={true} xs={12} sm={3} key={index}>
              <Box textAlign="center">
                <Typography variant="overline">{item.title}</Typography>
                <Typography variant="h4">{item.stat}</Typography>
              </Box>
            </Grid>
          ))}
          */
