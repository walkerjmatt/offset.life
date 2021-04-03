import styled from "@emotion/styled";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";

export const FormFields = styled("div")`
  margin-top: 16px;
  display: grid;
  grid-column-gap: 12px;
  grid-row-gap: 16px;
  max-width: 600px;
  align-items: center;
`;

export const FormContainer = styled("div")`
  max-width: 600px;
  margin: auto;
`;

export const StyledRadio = styled(Radio)`
  &.MuiRadio-colorSecondary.Mui-checked {
    color: #00701a;
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  &.MuiFormLabel-root.Mui-focused {
    color: rgba(0, 0, 0, 0.54);
  }
`;
