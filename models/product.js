module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      manufacturing_date: DataTypes.DATE,
      due_date: DataTypes.DATE,
      vendor_cnpj: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'products',
    }
  );

  return Products;
};
