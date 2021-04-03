import React from "react";
import "react-step-progress-bar/styles.css";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import { ProgressBar, Step } from "react-step-progress-bar";

function ProgressBarSection(props) {
  const { percentState } = props;
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
        <ProgressBar
          filledBackground="linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(67,160,71,1) 50%, rgba(0,112,26,1) 100%)"
          percent={percentState}
        >
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
                style={{ fontSize: "30px" }}
              >
                🌱
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
                style={{ fontSize: "30px" }}
              >
                ☘️
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
                style={{ fontSize: "30px" }}
              >
                🌿
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
                style={{ fontSize: "30px" }}
              >
                🌲
              </div>
            )}
          </Step>
        </ProgressBar>
      </Container>
    </Section>
  );
}

export default ProgressBarSection;
