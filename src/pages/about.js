import React from "react";
import HeroSection2 from "components/HeroSection2";
import StatsSection from "components/StatsSection";
import TeamBiosSection from "components/TeamBiosSection";
import CtaSection from "components/CtaSection";

function AboutPage(props) {
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
