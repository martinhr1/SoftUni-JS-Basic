function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    price = 0;
    let destination = '';
    let holiday = '';
    if(budget <= 100 ){
        destination = 'Bulgaria';
        if(season === "summer"){
            holiday = 'Camp';
            price = 0.30 * budget;
        }else if(season === "winter"){
            holiday = 'Hotel';
            price = 0.70 * budget;
        }
    }else if(budget <= 1000){
        destination = 'Balkans';
        if(season === "summer"){
            holiday = 'Camp';
            price = 0.40 * budget;
        }else if(season === "winter"){
            holiday = 'Hotel';
            price = 0.80 * budget;
        }
    }else if(budget > 1000){
        destination = 'Europe';
        holiday = 'Hotel';
        price = 0.90 * budget;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${holiday} - ${(price).toFixed(2)}`);
}
// journey(["50", "summer"])
// journey(["75", "winter"])
// journey(["312", "summer"])
// journey(["678.53", "winter"])
// journey(["1500", "summer"])