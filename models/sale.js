module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sales',
    {
      
      quantity: DataTypes.INTEGER,
      date: DataTypes.DATE,      
      price: DataTypes.DOUBLE,
      product_id: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'sales',
    }
  );

  return Sales;
};
