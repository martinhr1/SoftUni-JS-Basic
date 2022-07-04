function petShop(input){
    let dogFood = input[0];
    let catFood = input[1];
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4.00;
    let foodCount = (dogFood * 2.50) + (catFood * 4.00);
    let res = foodCount + " lv.";
    console.log(res);
}
petShop(["13 ", "9 "])