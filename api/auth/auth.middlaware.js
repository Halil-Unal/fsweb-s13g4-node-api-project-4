
const neowners=[];



function loginPayloadCheck(req,res,next){
    const { name, password } =  req.body;
    if(name && name.trim().length > 2 && password && password.trim().length > 3 ) {
        neowners.push({
            name:name,
            password:password
        })
        next();
    } else {
        res.status(400).json({message: "name veya password bilgisi eksik!..."})
    }
}

function passwordCheck(req, res, next) {
  const { name, password } = req.body;
 

  for (let i = 0; i < neowners.length; i++) {
    const owner = neowners[i];
    if (owner.name === name && owner.password === password) {

     
      next();
    }
    else {
        res.status(400).json({message: "hatalı giriş"})
      }
  }


}

function validateUserNameIsUnique(req,res,next){
    try {
        
        const isExist = neowners.find(item=>item.name === req.body.name);
        if(isExist){
            res.status(400).json({message:"aynı kullanıcı adı mevcut."});
        }else{
            next();
        }
    } catch (error) {
        next(error)
    }
}


module.exports = {

    loginPayloadCheck,
    passwordCheck,validateUserNameIsUnique
 
}