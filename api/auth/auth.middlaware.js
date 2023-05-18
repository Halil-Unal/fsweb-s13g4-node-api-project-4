
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
  let isValidCredentials = false;

  for (let i = 0; i < neowners.length; i++) {
    const owner = neowners[i];
    if (owner.name === name && owner.password === password) {
      isValidCredentials = true;
      break;
    }
  }

  if (isValidCredentials) {
   
    next();
  } else {
    res.status(400).json({message: "hatalı giriş"})
  }
}




module.exports = {

    loginPayloadCheck,
    passwordCheck,
 
}