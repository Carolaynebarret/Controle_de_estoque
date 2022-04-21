const { runSQLFromFile } = require('../utils');

module.exports = {
  up: async () => {
    await runSQLFromFile(`${__dirname}/../scripts/2-products-migration.sql`);
  },
};
