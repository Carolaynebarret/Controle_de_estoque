const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const productRoute = require('./routes/product');
const vendorRoute = require('./routes/vendor');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.use('/', productRoute);
app.use('/', vendorRoute);

// app.get('/cad-produtos', function (req, res) {
//   res.render('cad-produtos');
// });

// app.post('/add-produto', function (req, res) {
//   Products.create({
//     nome: req.body.nome,
//     quantidade: req.body.quantidade,
//     preco: req.body.preco,
//     prateleira: req.body.prateleira,
//     descricao: req.body.descricao,
//     categoria: req.body.categoria,
//   })
//     .then(function () {
//       res.redirect('/produtos');
//     })
//     .catch(function (erro) {
//       res.send('Erro: Produto não foi cadastrado com sucesso!' + erro);
//     });
// });

// app.get('/del-pagamento/:id', function (req, res) {
//   Products.destroy({
//     where: { id: req.params.id },
//   })
//     .then(function () {
//       res.redirect('/produtos');
//     })
//     .catch(function (erro) {
//       res.send('Não apagado');
//     });
// });

app.listen(8081);
