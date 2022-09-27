function repainting(input){
    let RequiredAmountOfNylon = Number(input[0]) + 2;
    let RequiredAmountOfPaint = Number(input[1]) + (input[1] * 0.10);
    let AmountOfThinner = Number(input[2]);
    let HourForWork = Number(input[3]);
    let PriceForBags = 0.40;
    let PriceForNylon = RequiredAmountOfNylon * 1.50;
    let PriceForPaint = RequiredAmountOfPaint * 14.50;
    let PriceForThinner = AmountOfThinner * 5.00;
    let PriceForAllMaterials = PriceForNylon + PriceForPaint + PriceForThinner + PriceForBags;
    let PriceForWorkers = (PriceForAllMaterials * 0.30) * HourForWork;
    let FinalSum = PriceForAllMaterials + PriceForWorkers;
    console.log(FinalSum);
}
repainting(["5", "10", "10", "1"])