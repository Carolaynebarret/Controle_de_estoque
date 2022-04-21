const { runSQLFromFile } = require('../utils');

module.exports = {
  up: async () => {
    await runSQLFromFile(`${__dirname}/../scripts/3-purchases-migration.sql`);
  },
};
