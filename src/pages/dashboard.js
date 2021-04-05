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
      title="Welcome to Your Dashboard"
      subtitle=""
    />
  );
}

export default requireAuth(DashboardPage);
