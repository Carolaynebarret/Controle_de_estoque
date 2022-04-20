module.exports = (sequelize, DataTypes) => {
  const Produtos = sequelize.define("produtos", {
    nome: DataTypes.STRING,
    quantidade: DataTypes.DOUBLE,
    preco: DataTypes.DOUBLE,
    prateleira: DataTypes.DOUBLE,
    descricao: DataTypes.STRING,
    categoria: DataTypes.STRING,
  });
  return Produtos;
};
