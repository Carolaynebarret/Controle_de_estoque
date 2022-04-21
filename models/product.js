module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      lot: DataTypes.INTEGER,
      id_vendors: DataTypes.INTEGER,
      manufacturing_date: DataTypes.DATE,
      due_date: DataTypes.DATE,
      purchase_id: DataTypes.INTEGER,
      vendor_cnpj: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'products',
    }
  );

  return Products;
};
