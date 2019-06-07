const express = require('express');
const { Pool  } = require('pg');
const requireDir = require('require-dir');


/* Iniciando o App */ 
const app = express();

/* Iniciando o DB */ 

// Conexão com o banco Postgre
const connectionString = 'postgresql://postgres:123456@localhost:5432/postgres'

// Criando um objeto que recebe como parâmetro a string de conexao com o banco
const pool = new Pool({
    connectionString: connectionString,
});


/* Função que adiciona automaticamente no código tudo que esta na pasta models */
requireDir('./app/models');

/* Rotas */ 
app.use("/api", require("./src/routes"));

/* Teste de Conexão */

app.listen(3001);

module.exports = app;