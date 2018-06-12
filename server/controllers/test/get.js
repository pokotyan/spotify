const db = require('../../models');

module.exports = async (req, res, next) => {
  const { count } = await db.increments.findOne({
    where: { id: 1 },
    raw: true,
  });

  await db.increments.update({
    count: count + 1,
  }, {
    where: { id: 1 },
  });

  const result = await db.increments.findOne({
    where: { id: 1 },
    raw: true,
  });

  res.send({
    status: 200,
    error: null,
    data: result,
  });
  next();
};
