function yardGreening(input){
    let KVM = Number(input[0]);
    let priceKVM = KVM * 7.61;
    let discount = 0.18 * priceKVM;
    let finalPrice = priceKVM - discount;
    let res1 = "The final price is: " + finalPrice + " lv.";
    let res2 = "The discount is: " + discount + " lv.";
    console.log(res1);
    console.log(res2);
}
yardGreening([150])