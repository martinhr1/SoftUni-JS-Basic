function newHouse(input){
    let flowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    price = 0;
    discount = 0;
    if(flowers === "Roses"){
        price = flowersCount * 5;
        if(flowersCount > 80){
            discount = price - (price * 0.10);
        }
    }else if(flowers === "Dahlias"){
        price = flowersCount * 3.80;
        if(flowersCount > 90){
            discount = price - (price * 0.15);
        }
    }else if(flowers === "Tulips"){
        if(flowersCount > 80){
            price = flowersCount * 2.80; 
            discount = price - (price * 0.15);
        }else if (flowersCount <= 80){
            price = flowersCount * 2.8;
    }else if(flowers === "Narcissus"){
        if(flowersCount < 120){
            price = flowersCount * 3;
            discount = price + (price * 0.15);
        }else if (flowersCount >= 120){
            price = flowersCount * 3;
        }
    }else if(flowers === "Gladiolus"){
        price = flowersCount * 2.50;
        if(flowersCount < 80){
            discount = price + (price * 0.20);
        }
    }
    totalPrice = price - discount;
    if(budget >= totalPrice){
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${(budget - discount).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
    }
}
// newHouse((["Roses", "55", "250"]))
newHouse(["Tulips", "88", "260"])
// newHouse(["Narcissus", "119", "360"])