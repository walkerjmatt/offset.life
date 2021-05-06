import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import styled from "@emotion/styled";
import { useAuth } from "util/auth.js";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import StepSummary from "components/SignUpFlow/StepSummary";
import { mockPieChartData, mockBarChartData } from "util/mockdata";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(3),
  },
}));

const ChartTitle = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function DashboardSection(props) {
  const classes = useStyles();

  const auth = useAuth();
  const router = useRouter();

  const mockTest = {
    diet: "0.0",
    homeEnergy: "0.0",
    homePeople: "4.4",
    homeSize: "1.8",
    longFlights: "2.0",
    milesDriven: "1.9",
    ownCar: "1.0",
    shopHabit: "6.5",
    shortFlights: "1.4",
  };

  return (
    <>
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
          <>
            <StepSummary values={mockTest} onNext={() => {}} />
          </>
        </Container>
      </Section>
    </>
  );
}

export default DashboardSection;

/*
          <Grid item={true} xs={12} md={6}>
            <DashboardItems />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <Card>
              <CardContent className={classes.cardContent}>
                <Box>
                  <Typography variant="h6" paragraph={true}>
                    <strong>What is this?</strong>
                  </Typography>
                  <Typography paragraph={true}>
                    The component on your left is an example UI that shows you
                    how to fetch, display, and update a list of items that
                    belong to the current authenticated user. Try it now by
                    adding a couple items.
                  </Typography>
                  <Typography paragraph={true}>
                    It also shows how you can limit features based on plan. If
                    you're subscribed to the "pro" or "business" plan then
                    you'll be able to use the star button to highlight items,
                    otherwise you'll be asked to upgrade your plan.
                  </Typography>
                  <Typography paragraph={true}>
                    After exporting your code, you'll want to modify this
                    component to your needs. You may also find it easier to just
                    use this component as a reference as you build out your
                    custom UI.
                  </Typography>
                  <Box mt={3}>
                    <Typography variant="h6" paragraph={true}>
                      <strong>Extra debug info</strong>
                    </Typography>
                    <Typography component="div">
                      <div>
                        You are signed in as <strong>{auth.user.email}</strong>.
                      </div>

                      {auth.user.stripeSubscriptionId && (
                        <>
                          <div>
                            You are subscribed to the{" "}
                            <strong>{auth.user.planId} plan</strong>.
                          </div>
                          <div>
                            Your plan status is{" "}
                            <strong>
                              {auth.user.stripeSubscriptionStatus}
                            </strong>
                            .
                          </div>
                        </>
                      )}

                      <div>
                        You can change your account info{` `}
                        {auth.user.stripeSubscriptionId && <>and plan{` `}</>}
                        in{` `}
                        <Link href="/settings/general" passHref={true}>
                          <LinkMui>
                            <strong>settings</strong>
                          </LinkMui>
                        </Link>
                        .
                      </div>

                      {!auth.user.stripeSubscriptionId && (
                        <div>
                          You can signup for a plan in{" "}
                          <Link href="/pricing" passHref={true}>
                            <LinkMui>
                              <strong>pricing</strong>
                            </LinkMui>
                          </Link>
                          .
                        </div>
                      )}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          */
