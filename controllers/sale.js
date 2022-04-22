const { Sales } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const sales = await Sales.findAll({ order: [['id', 'ASC']] });
      return res.status(200).json({ sales });
    } catch (error) {
      return res.status(500).json({ message: 'SERVER_ERROR', error });
    }
  },
  async create(req, res) {
    try {
      const sale = await Sales.create({
        quantity: req.body.quantity,
        date: req.body.date,
        price: req.body.price,
        product_id: req.body.product_id,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
      });

      return res.status(201).json({ sale });
    } catch (error) {
      return res.status(500).json({ message: 'SERVER_ERROR', error });
    }
  },
};
