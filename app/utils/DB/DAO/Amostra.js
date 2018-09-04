import Connection from './../db';

const Amostra = {

    insert: (amostra) => {
        const con = Connection.getConnection();
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO AMOSTRAS VALUES ?";
            var values = amostra;
            console.log(values)
            con.query(sql, [values], function (err, result) {
              if (err) throw err;
              console.log("Number of records inserted: " + result.affectedRows);
            });
        });

        
    }


}

export default Amostra;