function oscars(input){
    let name = String(input[0]);
    let points = Number(input[1]);
    let ratersCount = Number(input[2]);

    let totalPoints = points;
    for(let i = 3; i < input.length; i += 2){
        let nameOfRaters = input[i];
        let pointsGiven = Number(input[i + 1]);
        
        let totalRatersPoints = (nameOfRaters.length * pointsGiven) / 2;
        totalPoints += totalRatersPoints;
        if(totalPoints > 1250.5){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }  
    }
    let pointsNeeded = 1250.5 - totalPoints;
    console.log(`Sorry, ${name} you need ${pointsNeeded.toFixed(1)} more!`);
}
oscars([
    "Zahari Baharov",
    "205",
    "4",    
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
])
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])