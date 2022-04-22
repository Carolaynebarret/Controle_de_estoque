module.exports = (sequelize, DataTypes) => {
  const Purchases = sequelize.define(
    'Purchases',
    {
      date: DataTypes.DATE,      
      price: DataTypes.DOUBLE,
      quantity: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      vendor_cnpj: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'purchases',
    }
  );

  return Purchases;
};
