import Connection from './../db';

const Senha = {

    getSenha: async (callback) => {
        const con = Connection.getConnection();
        let r = "erro";
        con.connect(function(err) {
          if(err) {throw err;}

          var $query = 'SELECT senha from usuarios';

          con.query($query, function(err, result, fields) {
            if(err) {
              console.log(err);
              return;
            }
            r = result[0].senha;
            return callback(r);
          });
        });
        
    }   
}

export default Senha;