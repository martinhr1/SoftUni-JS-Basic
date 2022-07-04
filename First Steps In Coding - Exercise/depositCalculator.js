function depositCalculator(input){
    let depositSum = Number(input[0]);
    let depositLength = Number(input[1]);
    let depositInsertPercent = (input[2]);
    let res = depositSum + depositLength * ((depositSum * depositInsertPercent) / 1200);
    console.log(res);
}
depositCalculator(["200", "3", "5.7"])