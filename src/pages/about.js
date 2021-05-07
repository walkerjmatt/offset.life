import React from "react";
import HeroSection2 from "components/HeroSection2";
import StatsSection from "components/StatsSection";
import TeamBiosSection from "components/TeamBiosSection";
import CtaSection from "components/CtaSection";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "components/SectionHeader";

const DiagramContainer = styled("div")``;

function AboutPage(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: "url(/diagram.png)",
      height: "500px",
      width: "1100px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        height: "200px",
        width: "400px",
        marginLeft: "-30px",
      },
    },
    second: {
      backgroundImage: "url(/values.png)",
      height: "600px",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.down("md")]: {
        height: "200px",
        width: "100%",
        display: "none",
      },
    },
    section: {
      margin: "auto",
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
        title="Our Mission"
        subtitle="The climate crisis is here. It is the biggest challenge humanity has encountered. In our modern world living sustainably is more difficult than it should be. Everything we do has an impact on the planet but changing our lifestyle is hard. It doesn’t have to be. Empowered by Offset.Life’s holistic platform we solve this problem together."
      />
      <SectionHeader
        title="How it Works"
        subtitle=""
        size={4}
        className={buttonClasses.section}
      />
      <DiagramContainer className={buttonClasses.root}></DiagramContainer>

      <StatsSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
      />
            <DiagramContainer className={buttonClasses.second}></DiagramContainer>
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
