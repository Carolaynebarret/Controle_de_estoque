const fs = require("fs");

const model = require("../models");

module.exports = {
  runSQLFromFile: async (fileName) => {
    const sql = fs.readFileSync(fileName).toString();

    try {
      await model.sequelize.query(sql, { raw: true });
    } catch (error) {
      throw error;
    }
  },
};
