const { Products } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const products = await Products.findAll({ order: [['id', 'ASC']] });
      return res.status(200).json({ products });
    } catch (error) {
      return res.status(500).json({ message: 'SERVER_ERROR' });
    }
  },
};
