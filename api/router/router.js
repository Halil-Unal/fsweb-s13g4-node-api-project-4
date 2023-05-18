const router = require("express").Router();
const { hobbits, getId } = require("./model");
const mv=require("../auth/auth.middlaware")


router.get('/owners', (req, res, next) => {
  try {
    res.json(hobbits);
  } catch (error) {
    next(error);
  }
});

router.post('/kayit',mv.loginPayloadCheck, (req, res, next) => {
  try {

    const {name} = req.body;
    const newowner={
        id:getId(),
        name:name

    }
     hobbits.push(newowner);

    
    res.json(newowner);
    next();
    // Kayıt işlemleri
  } catch (error) {
    next(error);
  }
});

router.post('/log',mv.passwordCheck ,(req, res, next) => {
    try {
      
          console.log("Welcome");
          res.json({message:"Hoşgeldiniz"});
      } catch (error) {
        next(error);
      }
      
});

module.exports = router;
