import Connection from "../db";

const Amostra = {
  insert: amostra => new Promise((resolve, reject) => {
      const con = Connection.getConnection();
      con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
        const sql = 'INSERT INTO AMOSTRAS VALUES ?';
        const values = amostra;
        console.log(values);
        con
          .query(sql, [values], (err, result) => {
            if (err) throw err;
            console.log(`Number of records inserted: ${  result.affectedRows}`);
          })
          .on('error', err => {
            if (err.code == 'ER_DUP_ENTRY') {
              const duplicated = err.sqlMessage.split("'")[1]
              const er = {
                type: "Duplicated Entry",
                data: duplicated
              }
              error(er);
            }
            error(err);
          })
          .on('end', () => {
            con.destroy();
          });
      });
    }),


}

export default Amostra;
