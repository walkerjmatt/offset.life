const plaid = require("plaid");
const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET_SANDBOX,
  env: plaid.environments.sandbox,
});

export default (req, res) => {
  // TODO: req is not passing through the public token
  const body = req.body;
  console.log("call", req.body);
  console.log("here: ", req.body.publicToken);
  return client
    .getTransactions(
      req.body.access_token,
      req.body.start_date,
      req.body.end_date,
    )
    .then((result) => {
      console.log("then: ", result);
      res.send(result);
    })
    .catch((err) => {
      console.log("error", err);
      res.send({ status: "error" });
    });
};
