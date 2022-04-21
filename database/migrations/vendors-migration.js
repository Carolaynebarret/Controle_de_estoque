const { runSQLFromFile } = require('../utils');

module.exports = {
  up: async () => {
    await runSQLFromFile(`${__dirname}/../scripts/vendors-migration.sql`);
  },
};
