const { Vendors } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const vendors = await Vendors.findAll({ order: [['name', 'ASC']] });
      return res.status(200).json({ vendors });
    } catch (error) {
      return res.status(500).json({ message: 'SERVER_ERROR', error });
    }
  },
};
