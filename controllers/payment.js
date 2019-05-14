module.exports = (req, res) => {
  console.log(req);

  res.render(req.params.status == 'success' ? 'success' : 'cancelled');
};