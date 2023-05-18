let loggedUsers = [];




function loginPayloadCheck(req,res,next){
    const { name, password } =  req.body;
    if(name && name.trim().length > 2 && password && password.trim().length > 3 ) {
        next();
    } else {
        res.status(400).json({message: "name veya password bilgisi eksik!..."})
    }
}

function passwordCheck(req,res,next){
    const { password,name } = req.body;
    if (name && password == "1234") {
        loggedUsers.push(req.ip)
        next();
    } else {
        next({status: 400, message: "Invalid credentials!.."})
    }
}

function restricted(req,res,next){
    try{
        if (loggedUsers.includes(req.ip)) {
            console.log(`Welcome back ${req.ip}!..`);
            next();
        } else {
            res.status(401).json({message: "Unauthorized access!.."})
        }
    } catch (err) {
        next(err)
    }
;
    
}

module.exports = {

    loginPayloadCheck,
    passwordCheck,
    restricted,
}