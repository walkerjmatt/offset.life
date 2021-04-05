import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "react-step-progress-bar/styles.css";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import ProgressBarSection from "components/SignUpFlow/ProgressBarSection";
import StepSignin from "components/Stepsignin";
import StepTwo from "components/StepTwo";
import StepThree from "components/StepThree";
import StepFour from "components/StepFour";
import { FormContainer } from "styles/Styles";

function SignUpFlow(props) {
  const [percentState, setPercentState] = React.useState(1);

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      test: "",
    },
    validationSchema: validationSchema,
  });

  const renderStep = (percent) => {
    switch (percent) {
      case 1:
        return (
          <StepSignin formik={formik} onNext={() => setPercentState(34)} />
        );
      case 34:
        return (
          <FormContainer>
            <StepTwo formik={formik} onNext={() => setPercentState(66)} />
          </FormContainer>
        );
      case 66:
        return (
          <FormContainer>
            <StepFour formik={formik} onNext={() => setPercentState(100)} />
          </FormContainer>
        );
      default:
        return (
          <StepThree formik={formik} onNext={() => setPercentState(100)} />
        );
    }
  };

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
        <>
          <ProgressBarSection percentState={percentState} />
          {renderStep(percentState)}
        </>
      </Container>
    </Section>
  );
}

export default SignUpFlow;

/*
<form onSubmit={formik.handleSubmit}>
              {renderStep(percentState)}
            </form>

            <FormContainer>
              {renderStep(percentState)}
          </FormContainer>
*/
