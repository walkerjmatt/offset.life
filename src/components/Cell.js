import React from "react";
import styled from "@emotion/styled";

const CellContainer = styled("div")`
  padding: 24px;
  background-color: #ffffff;
  height: 400px;
  width: 400px;
`;

function Cell({ children }) {
  return <CellContainer>{children}</CellContainer>;
}

export default Cell;
