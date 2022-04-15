const db = require("./db");

const Produtos = db.sequelize.define("produtos", {
  nome: {
    type: db.Sequelize.STRING,
  },
  quantidade: {
    type: db.Sequelize.DOUBLE,
  },
  preco: {
    type: db.Sequelize.DOUBLE,
  },
  prateleira: {
    type: db.Sequelize.DOUBLE,
  },
  descricao: {
    type: db.Sequelize.STRING,
  },
  categoria: {
    type: db.Sequelize.STRING,
  },
});

//Criar a tabela
//Produtos.sync({ force: true });

module.exports = Produtos;
