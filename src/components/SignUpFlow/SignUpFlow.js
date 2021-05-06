import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "react-step-progress-bar/styles.css";
import styled from "@emotion/styled";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import ProgressBarSection from "components/SignUpFlow/ProgressBarSection";
import StepSignin from "components/SignUpFlow/Stepsignin";
import StepTwo from "components/SignUpFlow/StepTwo";
import StepShortFlights from "components/SignUpFlow/StepShortFlights";
import StepJourney from "components/SignUpFlow/StepJourney";
import StepFlights from "components/SignUpFlow/StepFlights";
import StepDriving from "components/SignUpFlow/StepDriving";
import StepShop from "components/SignUpFlow/StepShop";
import StepHousehold from "components/SignUpFlow/StepHousehold";
import StepPeople from "components/SignUpFlow/StepPeople";
import StepEnergy from "components/SignUpFlow/StepEnergy";
import ClientsSection from "components/ClientsSection";
import { initialValues } from "util/constants";
import ReadyToOffsetSection from "components/ReadyToOffsetSection";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import StepSummary from "components/SignUpFlow/StepSummary";
import { FormContainer } from "styles/Styles";

function SignUpFlow(props) {
  const [percentState, setPercentState] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentModalStep, setCurrentModalStep] = React.useState(1);

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
    initialValues: initialValues,
    validationSchema: validationSchema,
  });

  const renderStep = (percent) => {
    switch (percent) {
      case 1:
        return (
          <StepSignin
            formik={formik}
            onNext={() => setPercentState(11)}
            onBack={() => setPercentState(1)}
          />
        );
      case 11:
        return (
          <FormContainer>
            <StepTwo
              formik={formik}
              onNext={() => setPercentState(21)}
              onBack={() => setPercentState(1)}
            />
          </FormContainer>
        );
      case 21:
        return (
          <FormContainer>
            <StepJourney
              formik={formik}
              onNext={() => setPercentState(31)}
              onBack={() => setPercentState(11)}
            />
          </FormContainer>
        );
      case 31:
        return (
          <FormContainer>
            <StepDriving
              formik={formik}
              onNext={() => setPercentState(41)}
              onBack={() => setPercentState(21)}
            />
          </FormContainer>
        );
      case 41:
        return (
          <FormContainer>
            <StepFlights
              formik={formik}
              onNext={() => setPercentState(51)}
              onBack={() => setPercentState(31)}
            />
          </FormContainer>
        );
      case 51:
        return (
          <FormContainer>
            <StepShortFlights
              formik={formik}
              onNext={() => setPercentState(61)}
              onBack={() => setPercentState(41)}
            />
          </FormContainer>
        );
      case 61:
        return (
          <FormContainer>
            <StepShop
              formik={formik}
              onNext={() => setPercentState(71)}
              onBack={() => setPercentState(51)}
            />
          </FormContainer>
        );
      case 71:
        return (
          <FormContainer>
            <StepHousehold
              formik={formik}
              onNext={() => setPercentState(81)}
              onBack={() => setPercentState(61)}
            />
          </FormContainer>
        );
      case 81:
        return (
          <FormContainer>
            <StepPeople
              formik={formik}
              onNext={() => setPercentState(91)}
              onBack={() => setPercentState(71)}
            />
          </FormContainer>
        );
      case 91:
        return (
          <FormContainer>
            <StepEnergy
              formik={formik}
              onNext={() => {
                setPercentState(100);
              }}
              onBack={() => setPercentState(81)}
            />
          </FormContainer>
        );
      default:
        return <StepSummary values={formik.values} onNext={() => {}} />;
    }
  };

  const finalValue = 100;

  const getDialogContent = () => {
    if (currentModalStep === 1) {
      return (
        <>
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send an update when the ability to offset your
              footprint is fully connected.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsModalOpen(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={() => setCurrentModalStep(2)} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </>
      );
    } else {
      return (
        <>
          <DialogTitle id="form-dialog-title">
            Thank you for for starting your carbon journey!
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Together we can make a difference and keep fighting towards carbon
              neutrality.
            </DialogContentText>
          </DialogContent>
        </>
      );
    }
  };

  const BackToCalculator = styled("div")`
    cursor: pointer;
  `;

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
            <ProgressBarSection percentState={percentState} />
            {percentState === finalValue && (
              <BackToCalculator onClick={() => setPercentState(91)}>
                ← Back to calculator
              </BackToCalculator>
            )}
            {renderStep(percentState)}
          </>
        </Container>
        {percentState === finalValue && (
          <ReadyToOffsetSection
            bgColor="primary"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            title="Ready to offset?"
            subtitle=""
            buttonText="Connect to stay informed"
            buttonColor="default"
            textOnly={currentModalStep === 2}
            onClick={() => setIsModalOpen(true)}
          />
        )}
      </Section>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        {getDialogContent()}
      </Dialog>
    </>
  );
}

export default SignUpFlow;
