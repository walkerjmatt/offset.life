import React from "react";
import HeroSection2 from "components/HeroSection2";
import StatsSection from "components/StatsSection";
import TeamBiosSection from "components/TeamBiosSection";
import CtaSection from "components/CtaSection";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";

const DiagramContainer = styled("div")`
`;


function AboutPage(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: 'url(/diagram.png)',
      height: "500px",
      width: "1000px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        height: "200px",
        width: "100%",
      },
    },
  }));
  const buttonClasses = useStyles();
  return (
    <>
      <HeroSection2
        bgColor="default"
        size="large"
        bgImage=""
        bgImageOpacity={1}
        title="We help you make a difference"
        subtitle="Global warming is upon us and we need to start taking our emissions out of the atmosphere. Tired of the inaction and continued degradation of the environment Offset.Life was formed with a mission to connect you to your footprint, offset it, and learn over time how to reduce your overall footprint as we transition towards a green society. Changing our lifestyle is hard and everything we do has some impact on the planet, but we can solve this problem together"
      />
      <DiagramContainer className={buttonClasses.root}></DiagramContainer>

      <StatsSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/pricing"
      />
    </>
  );
}

export default AboutPage;
