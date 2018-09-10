import Connection from './../db';

const Amostra = {
  insert: amostra => {
    return new Promise((resolve, error) => {
      const con = Connection.getConnection();
      con.connect(function(err) {
        if (err) throw err;
        console.log('Connected!');
        var sql = 'INSERT INTO AMOSTRAS VALUES ?';
        var values = amostra;
        console.log(values);
        con
          .query(sql, [values], function(err, result) {
            if (err) throw err;
            console.log('Number of records inserted: ' + result.affectedRows);
          })
          .on('error', err => {
              if(err.code == 'ER_DUP_ENTRY'){
                  let duplicated = err.sqlMessage.split("'")[1]
                  let er = {
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
    });
  }
};

export default Amostra;
