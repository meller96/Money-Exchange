// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var money = [1, 5, 10, 25, 50];
    var index = money.length-1;
    var changing = {};
    var arr = [];
    var clear = {};
    var h = 1;
    var q = 1;
    var d = 1;
    var n = 1;
    var p = 1;
    var Error = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    }
    if (currency <= 0){
        return clear;
    }
    else if (currency > 10000){
        return Error;
    }
    while (currency >= money[0]) {
        if (currency >= money[index]){
            currency -= money[index];
            arr.push (money[index]);
            
            if (money[index] == 50){
                changing.H = h++;
            }
            else if(money[index] == 25){
                changing.Q = q++;
            }
            else if(money[index] == 10){
                changing.D = d++;
            }
            else if(money[index] == 5){
                changing.N = n++;
            }
            else if(money[index] == 1){
                changing.P = p++;
            }

        }
        else index--;
    }
   return changing;
}
