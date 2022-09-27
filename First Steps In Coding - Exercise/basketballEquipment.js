function basketballEquipment(input){
    let annualTrainingFee = Number(input[0]);
    let basketballTrain = annualTrainingFee - (input[0] * 0.40);
    let basketballEquipment = basketballTrain - (basketballTrain * 0.20);
    let basketballBall = 0.25 * basketballEquipment;
    let basketballAccessories = 0.20 * basketballBall;
    let priceForAllEquipment = annualTrainingFee + basketballTrain + basketballEquipment + basketballBall + basketballAccessories;
    console.log(priceForAllEquipment);
}
basketballEquipment(["550"])