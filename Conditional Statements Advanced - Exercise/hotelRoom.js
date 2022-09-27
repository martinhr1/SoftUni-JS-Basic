function hotelRoom(input){
    let month = input[0];
    let nightsCount = Number(input[1]);
    priceForRoom = 0;
    priceForApp = 0;
    totalPriceForRoom = 0;
    totalPriceForApp = 0;
    if(month === "May" || month === "October"){
        if(nightsCount >= 7 && nightsCount <= 14){
            priceForRoom = 50;
            priceForRoom = priceForRoom - (priceForRoom * 0.05);
            totalPriceForRoom = nightsCount * priceForRoom;
            priceForApp = 65;
            priceForApp = priceForApp - (priceForApp * 0.10);
            totalPriceForApp = nightsCount * priceForApp;
        }if(nightsCount > 14){
            priceForRoom = 50;
            priceForRoom = priceForRoom - (priceForRoom * 0.30);
            totalPriceForRoom = nightsCount * priceForRoom;
            priceForApp = 65;
            priceForApp = priceForApp - (priceForApp * 0.10);
            totalPriceForApp = nightsCount * priceForApp;
        }
    }else if(month === "June" || month === "September"){
        if(nightsCount >= 7 && nightsCount <= 14){
            priceForRoom = 75.20;
            totalPriceForRoom = nightsCount * priceForRoom;
            priceForApp = 68.70;
            totalPriceForApp = nightsCount * priceForApp;
        }else if(nightsCount > 14){
            priceForRoom = 75.20;
            priceForRoom = priceForRoom - (priceForRoom * 0.20);
            totalPriceForRoom = nightsCount * priceForRoom;
            priceForApp = 68.70;
            priceForApp = priceForApp - (priceForApp * 0.10);
            totalPriceForApp = nightsCount * priceForApp;
        }
    }else if(month === "July" || month === "August"){
            priceForRoom = 76;
            priceForApp = 77;
        if(nightsCount >= 7 && nightsCount <= 14){
            totalPriceForRoom = nightsCount * priceForRoom;
            totalPriceForApp = nightsCount * priceForApp;
        }else if(nightsCount > 14){
            priceForRoom = 76;
            totalPriceForRoom = nightsCount * priceForRoom;
            priceForApp = priceForApp - (priceForApp * 0.10);
            totalPriceForApp = nightsCount * priceForApp;
        }
    }
    console.log(`Apartment: ${totalPriceForApp.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceForRoom.toFixed(2)} lv.`);
}
// hotelRoom(["May", "15"])
// hotelRoom(["June", "14"])
// hotelRoom(["August", "20"])