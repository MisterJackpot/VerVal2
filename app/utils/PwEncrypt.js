module.exports = {

    encryptPw: function(pwString){
        try{
            const bcrypt = require('bcryptjs');
            const salt = bcrypt.genSaltSync(10);
            const hashedPw = bcrypt.hashSync(pwString, salt);
            return hashedPw;
        }catch(e){
            throw new Error(e); 
        }

    },

    checkStringHash: function(pwString, hashedPw){
        try{
            const bcrypt = require('bcryptjs');
            if(bcrypt.compareSync(pwString,hashedPw))
            {
                return true;
            }
            else{
                return false;
            }
        }catch(e){
            throw new Error(e);
        }
    }
}