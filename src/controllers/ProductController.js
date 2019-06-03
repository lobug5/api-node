const { Pool  } = require('pg');

// Conexão com o banco Postgre
const connectionString = 'postgresql://postgres:123456@localhost:5432/postgres'

// Criando um objeto que recebe como parâmetro a string de conexao com o banco
const pool = new Pool({
    connectionString: connectionString,
});

const Product = pool.query('SELECT * FROM product', (err, res) => {    
    pool.end()
});


module.exports = {
    async index(req, res){
        const products = await Product;
     
        return res.json(products);
    },
};
