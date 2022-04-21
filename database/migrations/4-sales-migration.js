const { runSQLFromFile } = require('../utils');

module.exports = {
  up: async () => {
    await runSQLFromFile(`${__dirname}/../scripts/4-sales-migration.sql`);
  },
};
