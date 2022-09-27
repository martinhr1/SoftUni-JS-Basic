function cleverLily(input){
    let age = Number(input[0]);
    let priceOfWashingMachine = Number(input[1]);
    let priceOfToy = Number(input[2]);
    let birthdayMoney = 0;
    let toysCounter = 0;
    let finalMoney = 0;
    for(let i = 1; i <= age; i++){
        if(i % 2 != 0){
            toysCounter += 1;
        }else{
            let money = (i / 2) * 10;
            birthdayMoney += money;
        }
    }
    finalMoney = birthdayMoney + (toysCounter * priceOfToy) - (age - toysCounter);
    
    if(priceOfWashingMachine <= finalMoney){
        let moneyLeft = finalMoney - priceOfWashingMachine;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    }else{
        let moneyNeeded = priceOfWashingMachine - finalMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"])