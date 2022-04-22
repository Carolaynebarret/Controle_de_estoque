const { Purchases } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const purchases = await Purchases.findAll({ order: [['id', 'ASC']] });
      return res.status(200).json({ purchases });
    } catch (error) {
      return res.status(500).json({ message: 'SERVER_ERROR', error });
    }
  },
};
