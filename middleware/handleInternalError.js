// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  res.status(500).send(`Internal Server Error: ${err.message}`);
};
