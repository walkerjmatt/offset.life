import React from "react";
import AuthSection from "components/AuthSection";
import { useRouter } from "next/router";

function StepSignIn(props) {
  const { formik, onNext} = props;
  const router = useRouter();
  return (
    <AuthSection
      bgColor="default"
      size="medium"
      bgImage=""
      bgImageOpacity={1}
      type={router.query.type}
      providers={["google", "facebook", "twitter"]}
      afterAuthPath={""}
      onSuccess={onNext}
    />
  );
}

export default StepSignIn;
