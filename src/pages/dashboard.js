import React from "react";
import DashboardSection from "components/DashboardSection";
import { requireAuth } from "util/auth.js";

function DashboardPage(props) {
  return (
    <DashboardSection
      bgColor="default"
      size="medium"
      bgImage=""
      bgImageOpacity={1}
    />
  );
}

export default requireAuth(DashboardPage);
