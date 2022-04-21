module.exports = (sequelize, DataTypes) => {
  const Vendors = sequelize.define(
    'Vendors',
    {
      cnpj: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'vendors',
    }
  );

  return Vendors;
};
