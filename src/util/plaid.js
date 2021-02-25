import { apiRequest } from "./util";

const createLinkToken = async () => {
  console.log("before hey");
  const hey = await apiRequest("plaid-create-token", "POST");
  console.log("hey done", hey);
  return hey;
};

const exchangePublicToken = async (publicToken) => {
  console.log("before hey", publicToken);
  const hey = await apiRequest("plaid-exchange-public-token", "POST", {
    publicToken,
  });
  console.log("hey done", hey);
  return hey;
};

const plaid = { createLinkToken, exchangePublicToken };

export default plaid;
