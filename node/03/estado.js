let estado = function (e){
    if(e == "SP"|| e == "RJ"){
        return "pode"
    }else{
        return "não pode"
    }
}

module.exports = estado 
 