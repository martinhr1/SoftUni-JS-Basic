function fishTank(input){
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percantage = Number(input[3]) / 100;
    let volumeOfAquarium = l * w  * h;
    let volumeInLiters = volumeOfAquarium * 0.001;
    let LitersNeeded = volumeInLiters * (1 - percantage);
    console.log(LitersNeeded);
}
fishTank(["105", "77", "89", "18.5"])