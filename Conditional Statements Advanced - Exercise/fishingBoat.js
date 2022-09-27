function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);
    let price = 0;

    if(season === "Spring"){
        price = 3000;
        if(fisherCount <= 6){
            price = price - (price * 0.10);
        }else if(fisherCount >= 7 && fisherCount <= 11){
            price = price - (price * 0.15);
        }else if(fisherCount > 12){
            price = price - (price * 0.25);
        }
        if(fisherCount % 2 === 0){
            price = price - (price * 0.05)
        }
    }else if(season === "Summer"){
        price = 4200;
        if(fisherCount <= 6){
            price = price - (price * 0.10);
        }else if(fisherCount >= 7 && fisherCount <= 11){
            price = price - (price * 0.15);
        }else if(fisherCount > 12){
            price = price - (price * 0.25);
        }
        if(fisherCount % 2 === 0){
            price = price - (price * 0.05)
        }
    }else if(season === "Autumn"){
        price = 4200;
        if(fisherCount <= 6){
            price = price - (price * 0.10);
        }else if(fisherCount >= 7 && fisherCount <= 11){
            price = price - (price * 0.15);
        }else if(fisherCount > 12){
            price = price - (price * 0.25);
        }
    }else if(season === "Winter"){
        price = 2600;
        if(fisherCount <= 6){
            price = price - (price * 0.10);
        }else if(fisherCount >= 7 && fisherCount <= 11){
            price = price - (price * 0.15);
        }else if(fisherCount > 12){
            price = price - (price * 0.25);
        }
        if(fisherCount % 2 === 0){
            price = price - (price * 0.05)
        }
    }
    if(budget >= price){
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}
// fishingBoat(["3000", "Summer", "11"])
// fishingBoat(["3600", "Autumn", "6"])
// fishingBoat(["2000", "Winter", "13"])
