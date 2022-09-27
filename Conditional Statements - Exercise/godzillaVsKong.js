function godzillaVsKong(input){
    let filmBudget = Number(input[0]);
    let statistCount = Number(input[1]);
    let priceForClothing = Number(input[2]);
    let priceForClothingForStatist = statistCount * priceForClothing;
    let decor = 0.1 * filmBudget;
    let discount = 0
    if(statistCount > 150){
        discount = 0.1 * priceForClothingForStatist;
    }
    let filmTotalPrice = decor + priceForClothingForStatist - discount;
    if(filmTotalPrice > filmBudget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(filmTotalPrice - filmBudget).toFixed(2)} leva more.`);
    }else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(filmBudget - filmTotalPrice).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000", "120", "55.5"])
godzillaVsKong(["15437.62", "186", "57.99"])
godzillaVsKong(["9587.88", "222", "55.68"])
