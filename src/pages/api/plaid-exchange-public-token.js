const plaid = require("plaid");
const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET_SANDBOX,
  env: plaid.environments.sandbox,
});

export default (req, res) => {
  // TODO: req is not passing through the public token
  const body = req.body;
  return client
    .exchangePublicToken(req.body.publicToken)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send({ status: "error" });
    });
};
