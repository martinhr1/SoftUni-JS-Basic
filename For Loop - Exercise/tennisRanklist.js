function tennisRanklist(input){
    let tournaments = Number(input[0]);
    let points = Number(input[1]);
    let pointsWon = 0;
    let tournamentsWon = 0;
    pointsWon = points;
    for(let i = 1; i <= tournaments + 1; i++){
        let stageTournament = input[i];

        if(stageTournament === "W"){
            pointsWon += 2000;
            tournamentsWon += 1;
        }else if(stageTournament === "F"){
            pointsWon += 1200;
        }else if(stageTournament === "SF"){
            pointsWon += 720;
        }
    }
    console.log(`Final points: ${pointsWon}`);

    let averagePoints = Math.floor((pointsWon - points) / tournaments);
    console.log(`Average points: ${averagePoints}`);

    let percentWon = (tournamentsWon / tournaments) * 100;
    console.log(`${percentWon.toFixed(2)}%`);
}
// tennisRanklist([
//     "5",
//     "1400",
//     "F",
//     "SF",
//     "W",
//     "W",
//     "SF"
// ])
// tennisRanklist(["4",
// "750",
// "SF",
// "W",
// "SF",
// "W"])
