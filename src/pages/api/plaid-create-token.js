const plaid = require('plaid');
const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET_SANDBOX,
  env: plaid.environments.sandbox,
});

export default (req, res) => {
    console.log('call')
  return client
  .createLinkToken({
    user: {
      client_user_id: '6036cef7c2c21f00100aad4f',
    },
    client_name: 'Plaid Test App',
    products: ['auth', 'transactions'],
    country_codes: ['US'],
    language: 'en',
    webhook: 'https://sample-web-hook.com',
    account_filters: {
      depository: {
        account_subtypes: ['checking', 'savings'],
      },
    },
  })
  .then((result) => {
      console.log('then: ', result);
    res.send(result);
  })
  .catch((err) => {
      console.log('error', err)
    res.send({ status: "error" });
});

    
};
