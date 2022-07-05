function suppliesForSchool(input){
    let pensCount = Number(input[0]);
    let markersCount = Number(input[1]);
    let litersOfDetergent = Number(input[2]);
    let percentageDiscount = Number(input[3]);
    let pensPrice = pensCount * 5.80;
    let markersPrice = markersCount * 7.20;
    let detergentPrice = litersOfDetergent * 1.20;
    let allMaterialsPrice = pensPrice + markersPrice + detergentPrice;
    let allMaterialsPriceWithDiscount = allMaterialsPrice - (allMaterialsPrice * (percentageDiscount / 100));
    console.log(allMaterialsPriceWithDiscount)
}
suppliesForSchool(["4",

"2 ",

"5 ",

"13 "])