import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AspectRatio from "components/AspectRatio";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    // Add border that contrasts lightly with background color.
    // We use boxShadow so that it's hidden around outer edge
    // due to container <Card> having overflow: hidden
    boxShadow: `1px 1px 0 0 ${emphasize(theme.palette.background.paper, 0.08)}`,
    textAlign: "center",
  },
  imageContainer: {
    width: "100%",
    "& img": {
      width: "100%",
    },
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Connect your Account",
      body:
        "Login with your bank information and continue life as normal",
      image: "/rainbow-creditcard.jpg",
    },
    {
      title: "Assess and Digest",
      body:
        "Your purchases affect the planet - we calculate the emissions",
      image: "/garden-hands.jpg",
    },
    {
      title: "Your Impact",
      body:
        "Sequester carbon from the atmosphere and reduce your emissions to ZERO",
      image: "/elephants.jpg",
    },
    {
      title: "Optimize your life",
      body:
        "Every month we will recalculate your emissions to adjust to your changing lifestyle",
      image: "/farmers-market.jpg",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Card raised={false}>
          <Grid container={true}>
            {items.map((item, index) => (
              <Grid
                item={true}
                xs={12}
                md={6}
                className={classes.gridItem}
                key={index}
              >
                <Box p={6}>
                  <div className={classes.imageContainer}>
                    <AspectRatio ratio={4 / 3}>
                      <img style={{objectFit: "cover", maxHeight: "322px"}} src={item.image} alt={item.title} />
                    </AspectRatio>
                  </div>
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">{item.body}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
