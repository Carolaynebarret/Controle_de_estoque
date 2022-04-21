const { Products } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const products = await Products.findAll({ order: [['id', 'ASC']] });
      return res.status(200).json({ products });
    } catch (error) {
      return res.status(500).json({ message: 'SERVER_ERROR', error });
    }
  },
  async create(req, res) {
    try {
      const product = await Products.create({
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        manufacturing_date: req.body.manufacturing_date,
        due_date: req.body.due_date,
        vendor_cnpj: req.body.vendor_cnpj,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
      });

      return res.status(201).json({ product });
    } catch (error) {
      return res.status(500).json({ message: 'SERVER_ERROR', error });
    }
  },
};
