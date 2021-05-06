import { apiRequest } from "./util";

const createLinkToken = async () => {
  const hey = await apiRequest("plaid-create-token", "POST");
  return hey;
};

const exchangePublicToken = async (publicToken) => {
  const hey = await apiRequest("plaid-exchange-public-token", "POST", {
    publicToken,
  });
  return hey;
};

const plaid = { createLinkToken, exchangePublicToken };

export default plaid;
