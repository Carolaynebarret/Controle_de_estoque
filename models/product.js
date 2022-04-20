module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      name: DataTypes.STRING,
      amount: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      shelf: DataTypes.DOUBLE,
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'products',
    }
  );

  return Products;
};
