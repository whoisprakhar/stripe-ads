module.exports = (req, res) => {
  res.render(req.params.status == 'success' ? 'success' : 'cancelled');
};