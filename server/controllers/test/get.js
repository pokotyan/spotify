module.exports = (req, res, next) => {
  res.send({test: 'テスト'});
  next();
};
