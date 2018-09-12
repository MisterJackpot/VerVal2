var mysql = require('mysql');

const Connection = {
  getConnection : () => {

    const con = mysql.createConnection({
      host: "localhost",
      user: "vitor",
      password: "senha123",
      database: "rastreamento"
    });

    return con
  }
}

export default Connection;