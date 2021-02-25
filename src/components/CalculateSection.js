import React, { useEffect, useState } from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import plaid from "util/plaid.js";
//import { makeStyles } from "@material-ui/core/styles";

import { usePlaidLink } from "react-plaid-link";

const Link = (props) => {
    const [exchangeResponse, setExchangeResponse] = useState(null);

    const exchangePublicToken = async (public_token) => {
        const response = plaid.exchangePublicToken(public_token);
        const test = await response;
        setExchangeResponse(test);
        console.log('donetest: ', test)
        console.log('done: ', exchangeResponse)
      };
  const onSuccess = React.useCallback((public_token, metadata) => {
    // send public_token to server
    const response = exchangePublicToken(public_token);
    console.log('exhanged: ', response);
    // Handle response ...
  }, []);
  const config = {
    token: props.linkToken,
    onSuccess,
  };
  const { open, ready } = usePlaidLink(config);
  return (
    <button onClick={() => open()} disabled={!ready}>
      Link account
    </button>
  );
};

const App = () => {
  const [linkToken, setLinkToken] = useState(null);
  const generateToken = async () => {
    const response = plaid.createLinkToken();
    const test = await response;
    setLinkToken(test.link_token);
  };
  useEffect(() => {
    generateToken();
  }, []);
  return linkToken != null ? <Link linkToken={linkToken} /> : <></>;
};

function PricingSection(props) {
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
        <App />
      </Container>
    </Section>
  );
}

export default PricingSection;
