const { runSQLFromFile } = require('../utils');

module.exports = {
  up: async () => {
    await runSQLFromFile(`${__dirname}/../scripts/1-vendors-migration.sql`);
  },
};
