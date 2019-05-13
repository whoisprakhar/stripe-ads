const allowed = ['individual', 'smb'];

const placement = (title, price, skuId) => ({ title, price, skuId });

const data = {
  'individual': [
    placement('Community Event Post', 39, 'sku_F3tedyzqkh59PX'),
    placement('Community Deal', 49, 'sku_F3thSw4fVZzbke'),
    placement('Community Sponsor', 149, 'sku_F3thdXJeLivcWc'),
    placement('Community Spotlight', 499, 'sku_F3thdXJeLivcWc'),
  ],

  'smb': [
    placement('Community Event Post', 59, 'sku_F3tgsAyqFaXIo6'),
    placement('Community Deal', 69, 'sku_F3thcP3swZBYaO'),
    placement('Community Sponsor', 149, 'sku_F3thdXJeLivcWc'),
    placement('Community Spotlight', 499, 'sku_F3thdXJeLivcWc'),
  ],
};


module.exports = (req, res) => {
  const { placementType } = req.params;

  if (!allowed.includes(placementType))
    return res.status(404).send('Not found');

  const placements = data[placementType];

  res.render('main', { placements });
};