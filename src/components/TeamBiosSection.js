import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function TeamBiosSection(props) {
  const classes = useStyles();

  const items = [
    {
      avatar: "/xanderHeadshot.png",
      name: "Xander Kipp",
      role: "Founder & CEO",
      bio:
        "After receiving his undergraduate degree with the original intention of going to medical school, Xander struggled to find his life mission. Aware of the climate crisis he made changes to his lifestyle to reduce his carbon footprint, from eating primarily a vegan diet to participating in the zero-waste movement. He soon realized the massive societal need for mainstream solutions to mitigate the climate crisis individuals can take which are both simple and effective. This passion for the environment and desire to be an agent for positive societal change are two of his core values. ",
    },
    {
      avatar: "/ariHeadshot.jpg",
      name: "Ari Dimitirou",
      role: "Director of Finance & Operations",
      bio:
        "Ari’s background is in small business development within the music industry with a specialization in general management practices. He has spent the last 10 years in company wide managerial positions focusing on general operations and supply chain management. Ari also has a background in accounting and logistics in the organization and management of large events. He is dedicated to creating a greener and brighter future for generations to come.",
    },
    {
      avatar: "/mattHeadshot.png",
      name: "Matt Walker",
      role: "CTO",
      bio:
        "Matt started off his career working 3 years for a business analytics tech company, Riivos, that strove to change the way mortgage companies visualize and monitor their data. From there he spent a year at Postmates until Uber acquired them at the end of 2020. He is currently a Full-Stack Engineer helping UberEats grow globally, but is driven to use his skillset to help make change. His belief is that the growing success of the tech community can be transitioned into saving the environment and the ability to make a difference needs to be just a click away from the everyday consumer.",
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
        <Grid container={true} justify="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Box className={classes.avatarWrapper}>
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      className={classes.avatar}
                    />
                  </Box>
                  <Box textAlign="center" pt={3}>
                    <Typography variant="body2" component="p">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.role}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="body1" component="p">
                        {item.bio}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
