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

const getTransactions = async ({ access_token, start_date, end_date }) => {
  const hey = await apiRequest(
    "plaid-get-transactions",
    "POST", {access_token,
      start_date,
      end_date} 
  );

  console.log("transact done", hey);
  return hey;
};

const plaid = { createLinkToken, exchangePublicToken, getTransactions };

export default plaid;
