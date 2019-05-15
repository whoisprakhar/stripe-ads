module.exports = (req, res) => {
  res.render(req.params.status == 'success' ? 'transactions/success' : 'transactions/cancelled');
};