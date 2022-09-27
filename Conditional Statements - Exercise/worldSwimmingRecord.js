function worldSwimmingRecord(input){
    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeFor1m = Number(input[2]);

    let swimmAcrossTime = distanceInMeters * timeFor1m;
    let every15m = Math.floor(distanceInMeters / 15);
    let totalTime = swimmAcrossTime + (every15m * 12.5);
    
    if(totalTime < recordInSec){
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`);
    }
}
// worldSwimmingRecord(["10464", "1500", "20"])
worldSwimmingRecord(["55555.67", "3017", "5.03"])