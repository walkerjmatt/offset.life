import React from "react";
import AuthSection from "components/AuthSection";
import { useRouter } from "next/router";

function StepSignIn(props) {
  const { formik, onNext } = props;
  const router = useRouter();
  // , "facebook", "twitter"
  return (
    <AuthSection
      bgColor="default"
      size="medium"
      bgImage=""
      bgImageOpacity={1}
      type={router.query.type}
      providers={["google"]}
      afterAuthPath={""}
      onSuccess={onNext}
    />
  );
}

export default StepSignIn;
