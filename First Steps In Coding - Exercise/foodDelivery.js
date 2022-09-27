function foodDelivery(input){
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegeterianMenus = Number(input[2]);
    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let vegeterianMenusPrice = vegeterianMenus * 8.15;
    let priceForAllMenus = chickenMenusPrice + fishMenusPrice + vegeterianMenusPrice;
    let desertPrice = 0.20 * priceForAllMenus;
    let deliveryPrice = 2.50;
    let priceForDelivery = priceForAllMenus + desertPrice + deliveryPrice;
    console.log(priceForDelivery);
}
foodDelivery(["9", "2", "6"])